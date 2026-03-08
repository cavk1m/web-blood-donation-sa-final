import { useQuery } from '@tanstack/react-query';

// Sample API call
const fetchUsers = async () => {
  // Simulate API call
  return Promise.resolve([{ id: '1', name: 'John Doe' }]);
};

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};