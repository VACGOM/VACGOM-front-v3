import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { components } from '@/types/type';

import { useRouter } from 'next/navigation';
import { QUERY_KEY } from '@/api/queryKeys';
import { axiosInstance } from '@/api/axios';
import { PATH_API } from '@/api/path';

// API 요청 및 응답 타입 정의
type UsersResponse = components['schemas']['SignupDto.Response'];
type UserRequest = components['schemas']['SignupDto.Request'];

export const usePostUsers = (
  options?: Omit<
    UseMutationOptions<UsersResponse, any, UserRequest>,
    'mutationKey'
  >,
) => {
  const queryClient = useQueryClient();
  const navigate = useRouter();

  return useMutation<UsersResponse, any, UserRequest>({
    mutationKey: [QUERY_KEY.USERS],
    mutationFn: async (payload: UserRequest) => {
      console.log('payload:', payload);
      const response = await axiosInstance.post(PATH_API.USERS, payload);
      return response.data as UsersResponse;
    },
    onSuccess: (data) => {
      console.log('Mutation 성공:', data);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USERS] });
    },
    onError: (error) => {
      console.error('Mutation 에러:', error);
    },
    ...options,
  });
};
