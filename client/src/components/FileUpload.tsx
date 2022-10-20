import React from 'react';
import axios from 'axios';

interface FileUploadProps {
  method?: 'get' | 'post' | 'put';
  action: string;
}

const FileUpload = ({ method = 'post', action }: FileUploadProps) => {
  const onSubmit = (ev: any) => {
    console.log(ev);
    // axios({
    //     method,
    //     url: action,
    // })
  };

  return (
    <form
      //   method={method}
      //   action={action}
      onSubmit={onSubmit}
      //   encType='multipart/form-data'
    >
      <input type='file' name='file' />
      <input type='submit' value='Upload File' />
    </form>
  );
};

export default FileUpload;
