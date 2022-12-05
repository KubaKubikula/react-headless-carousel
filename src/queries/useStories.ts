import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useStories() {
  return useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://steller.co/feeds/users%2F2166257779239552048%2Ffeeds%2Fcollection-stories%3Fcontext%3D2279792120556423125",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      return data;
    },
  });
}
