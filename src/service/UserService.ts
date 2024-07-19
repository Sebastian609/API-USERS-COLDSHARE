
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async auth(username: string, password: string) {
    try {
      const user = await this.userRepository.auth(username, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const users = await this.userRepository.getAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async save(user: User): Promise<boolean> {
    try {
      const response = await this.userRepository.save(user);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(user: User): Promise<boolean> {
    try {
      const response = await this.userRepository.update(user);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
