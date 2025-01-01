import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { setSession } from '@/api/api_utils';
import { useRouter } from 'next/navigation';
import { QUERY_KEY } from '@/api/queryKeys';
import { axiosInstance } from '@/api/axios';
import { PATH_API } from '@/api/path';

// 카카오 간편인증 1차
export const useBabiesImages = <T>(
  options?: Omit<UseMutationOptions<any, any, T>, 'mutationKey'>,
) => {
  const queryClient = useQueryClient();
  const navigate = useRouter();

  return useMutation({
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
