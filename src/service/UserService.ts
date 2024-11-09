import { UserDTO } from "../models/UserDTO";  // Asegúrate de importar UserDTO
import { UserRepository } from "../repositories/UserRepository";

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

  /*async save(user: UserDTO): Promise<boolean> {  // Descomenta y usa UserDTO en lugar de User
    try {
      const response = await this.userRepository.save(user);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(user: UserDTO): Promise<boolean> {  // Lo mismo para el update
    try {
      const response = await this.userRepository.update(user);
      return response;
    } catch (error) {
      throw error;
    }
  }*/
}

export default UserService;
