// RoleService.ts
import { RoleDTO } from "../models/RoleDTO";
import { RoleRepository } from "../repositories/RoleRepository";

class RoleService {
    private roleRepository: RoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async getAll(): Promise<RoleDTO[]> {
        try {
            const roles = await this.roleRepository.getAll();
            return roles;
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<RoleDTO[]> {
        try {
            const role = await this.roleRepository.find(id);
            return role;
        } catch (error) {
            throw error;
        }
    }
}

export default RoleService;
