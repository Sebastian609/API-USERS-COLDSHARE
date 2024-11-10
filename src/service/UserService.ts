import { UserDTO } from "../models/UserDTO";  // Asegúrate de importar UserDTO
import { UserRepository } from "../repositories/UserRepository";
import { LoginDto } from "../models/LoginDto";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAll(): Promise<UserDTO[]> {  // Aquí se utiliza UserDTO
    try {
      const users = await this.userRepository.getAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async find(id: number): Promise<UserDTO> {  // Aquí también se utiliza UserDTO
    try {
      const user = await this.userRepository.find(id);  // Cambié users por user
      return user;
    } catch (error) {
      throw error;
    }
  }

  async create(user: UserDTO): Promise<void> {
    try {
      await this.userRepository.create(user);
    } catch (error) {
      throw error;
    }
  }

  async updateStatus(id: number, estado: number): Promise<void> {
    try {
      await this.userRepository.updateStatus(id, estado);
    } catch (error) {
      throw error;
    }
  }  

  async delete(id: number): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }

  async auth(login: LoginDto): Promise<UserDTO> {  // Lo mismo para el update
    try {
      const response = await this.userRepository.findByPasswordAndDNI(login);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
