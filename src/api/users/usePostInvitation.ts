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

type invitationResponse = components['schemas']['InvitationDto.Request.Get'];
type invitationRequest =
  components['schemas']['BaseResponseListBabyDto.Response.Detail'];

export const usePostInvitation = (
  options?: Omit<
    UseMutationOptions<invitationResponse, any, invitationRequest>,
    'mutationKey'
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation<invitationResponse, any, invitationRequest>({
    mutationKey: [QUERY_KEY.INVITATION],
    mutationFn: async (payload: invitationRequest) => {
      console.log('payload:', payload);
      const response = await axiosInstance.post(PATH_API.INVITATION, payload);
      return response.data as invitationResponse;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.INVITATION] });
    },
    onError: (error) => {
      console.error('Mutation 에러:', error);
    },
    ...options,
  });
};
