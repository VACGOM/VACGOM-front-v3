import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { paths, components } from '@/types/type';

import { setSession } from '@/api/api_utils';
import { useRouter } from 'next/navigation';
import { QUERY_KEY } from '@/api/queryKeys';
import { axiosInstance } from '@/api/axios';
import { PATH_API } from '@/api/path';

type BabiesImagesResponse =
  components['schemas']['BabyDto.Response.UploadedImage'];

// 아기 이미지 업로드
export const useBabiesImages = <T>(
  options?: Omit<
    UseMutationOptions<BabiesImagesResponse, any, T>,
    'mutationKey'
  >,
) => {
  const queryClient = useQueryClient();
  const navigate = useRouter();

  return useMutation<BabiesImagesResponse, any, T>({
    mutationKey: [QUERY_KEY.BABIES_IMAGES],
    mutationFn: async (payload: T) => {
      const response = await axiosInstance.post(
        PATH_API.BABIES_IMAGES,
        payload,
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.BABIES_IMAGES] });
    },
    onError: (error) => {},
    ...options,
  });
};
