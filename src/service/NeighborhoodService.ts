// services/NeighborhoodService.ts
import { NeighborhoodDTO } from "../models/NeighborhoodDTO";
import { NeighborhoodRepository } from "../repositories/NeighborhoodRepository";

class NeighborhoodService {
    private neighborhoodRepository: NeighborhoodRepository;

    constructor() {
        this.neighborhoodRepository = new NeighborhoodRepository();
    }

    async getAll(): Promise<NeighborhoodDTO[]> {
        try {
            const neighborhoods = await this.neighborhoodRepository.getAll();
            return neighborhoods;
        } catch (error) {
            throw error;
        }
    }

    async find(id: number): Promise<NeighborhoodDTO> {
        try {
            const neighborhood = await this.neighborhoodRepository.find(id);
            return neighborhood;
        } catch (error) {
            throw error;
        }
    }

    async create(neighborhood: NeighborhoodDTO): Promise<void> {
        try {
            await this.neighborhoodRepository.create(neighborhood);
        } catch (error) {
            throw error;
        }
    }

    async update(neighborhood: NeighborhoodDTO): Promise<void> {
        try {
            await this.neighborhoodRepository.update(neighborhood);
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.neighborhoodRepository.delete(id);
        } catch (error) {
            throw error;
        }
    }
    
}

export default NeighborhoodService;

