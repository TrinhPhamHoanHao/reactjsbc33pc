import React from 'react';
import ReactDOM from 'react-dom/client';
import ExerciseCart from './assets/BaiTapCart/ExerciseCart';
import BaiTapForm from './BaiTapForm/BaiTapForm';
import BaiTapGlasses from './BaiTapGlasses/BaiTapGlasses';
import BaiTapThucHanhLayout from './BaiTapLayoutComponent/BaiTapThucHanhLayout';
import RenderArrayComponent from './RenderArrayComponent/RenderArrayComponent';
import ChangeCarColor from './StateDemo/ChangeCarColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ChangeCarColor/>
  // <RenderArrayComponent/>
  // <BaiTapThucHanhLayout/>
  // <BaiTapGlasses/>
  // <ExerciseCart/>
  <BaiTapForm/>
);

