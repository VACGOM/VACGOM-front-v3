import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PATH_API } from '../../path';
import { axiosInstance } from '../../axios';
import { QUERY_KEY } from '../../queryKeys';
import { useRouter } from 'next/navigation';

// 카카오 간편인증 1차
export const useBabiesImages = <T>(
  options?: Omit<UseMutationOptions<any, any, T>, 'mutationKey'>,
) => {
  const queryClient = useQueryClient();
  const navigate = useRouter();

  return useMutation({
    mutationKey: [QUERY_KEY.KAKAO_VERIFY],
    mutationFn: async (payload: T) => {
      const response = await axiosInstance.post(PATH_API.KAKAO_VERIFY, payload);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.KAKAO_VERIFY] });
    },
    onError: (error) => {},
    ...options,
  });
};
