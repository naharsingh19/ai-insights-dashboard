import { AiData } from '../types'; // Assuming you have a types file with AiData type

// Simulated fetch function
export const fetchAiData = async (): Promise<AiData> => {
  try {
    const response = await fetch('/ai-data.json'); // Assuming ai-data.json is placed in the public directory
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};


