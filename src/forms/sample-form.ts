// Sample TanStack Form configuration
// Documentation: https://tanstack.com/form

export interface SampleFormData {
  name: string;
  email: string;
}

export const sampleFormSchema = {
  defaultValues: {
    name: '',
    email: '',
  } as SampleFormData,
};