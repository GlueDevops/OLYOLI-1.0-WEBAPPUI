import React from "react";
import BackArrow from "../Widgets/BackArrow";
import BottomNav from "../Elements/BottomNav";


const CreateShortsUploadVideo = () => {
  return (
    <main className='secondary-spacing'>
      <BackArrow />
      <div className='create-shorts-container'>
        <h2 className='create-shorts-heading'>Create Shorts</h2>
        <p className='create-shorts-paragraph'>
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <div className='upload-btn-container'>
          <button className='upload-btn'>
            <span className='material-symbols-outlined upload-icon'>add</span>
            <input
              type='file'
              accept='image/*'
              // onChange={uploadHandler}
              id='file'
              required
            />
          </button>
        </div>
        <p className='upload-image-text'>Upload Video</p>
        <p className='upload-image-info'>
          Max 1080 x 1920 Pixels. Maximum File Size 25MB
        </p>
        <div className='input-fields'>
          <input className='input-field mb-2' type='text' placeholder='Title *' />
          <select className='input-field mb-2'>
            <option value='' hidden>
              Choose Topic *
            </option>
          </select>
          <select className='input-field mb-4'>
            <option value='' hidden>
              Choose Language *
            </option>
          </select>
          <button className='main-btn'>Create</button>
        </div>
      </div>
      <BottomNav />
    </main>
  );
};

export default CreateShortsUploadVideo;
