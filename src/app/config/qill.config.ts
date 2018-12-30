import { QuillOptionsStatic } from 'quill';

export const quillConfig: QuillOptionsStatic = {
  modules: {
    toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }]]
  },
  theme: 'snow',
  placeholder: 'Write something here...'
};
