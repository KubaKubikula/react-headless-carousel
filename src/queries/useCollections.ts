import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useCollections() {
  return useQuery({
    queryKey: ["collections"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://steller.co/users/2166257779239552048/collections"
      );
      return data;
    },
  });
}
