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
}

export default NeighborhoodService;

