import { createForm } from '@tanstack/react-form';

export const sampleForm = createForm({
  defaultValues: {
    name: '',
    email: '',
  },
  onSubmit: ({ value }) => {
    console.log('Form submitted:', value);
  },
});