import { BlockType, Params } from "interfaces/apis";
import { Http } from "services/https";

export const EOSApi = {
  getBlocks: async ({
    records_count,
    show_empty,
  }: Params): Promise<BlockType[]> => {
    const request = await Http.Request<BlockType[]>({
      url: "/get_blocks",
      methodType: "GET",
      params: {
        records_count,
        show_empty,
      },
    });
    return request;
  },
  getTransactios: async ({
    records_count,
    show_empty,
  }: Params): Promise<BlockType[]> => {
    const request = await Http.Request<BlockType[]>({
      url: "/get_blocks",
      methodType: "GET",
      params: {
        records_count,
        show_empty,
      },
    });
    return request;
  },
  getAccounts: async ({
    records_count,
    show_empty,
  }: Params): Promise<BlockType[]> => {
    const request = await Http.Request<BlockType[]>({
      url: "/get_blocks",
      methodType: "GET",
      params: {
        records_count,
        show_empty,
      },
    });
    return request;
  },
};
