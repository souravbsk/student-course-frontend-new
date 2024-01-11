"use client";
import { useRef, useState, useEffect } from 'react'


import PrimaryDetails from '@/PageSpecificComponents/RegisterModal/PrimaryDetails';
import RoleSelection from '@/PageSpecificComponents/RegisterModal/RoleSelection';
import MoreDetails from '@/PageSpecificComponents/RegisterModal/MoreDetails';
import OtpVarification from '@/PageSpecificComponents/RegisterModal/OtpVarification';

function RegisterModel({ stdCode }) {

  // const session = useSession();
  // console.log(session);

  const [selectedStdCode, setStdCode] = useState("+91");

  const [stdCodeObject, setStdCodeObject] = useState({ name: 'india', code: '+91' });


  const [page, setPage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [animationDir, setAnimationDir] = useState(0);

  const enterFrom = animationDir === -1 ? "-100%" : "100%";
  const leaveTo = animationDir === 1 ? "-100%" : "100%";

  const commonProps = {
    page, enterFrom, leaveTo, setPage, setAnimationDir, animationDir, loading, setLoading
  }


  // const signInWithGoogle = () => {
  //   signIn('google');
  // }

  return (
    <div>
      <PrimaryDetails paginationProps={commonProps} />

      {/* <RoleSelection paginationProps={commonProps} /> */}

      <MoreDetails paginationProps={commonProps} stdCodeProps={{ selectedStdCode, setStdCode }} />

      <OtpVarification paginationProps={commonProps} stdCodeProps={{ selectedStdCode, setStdCode }}/>
    </div >
  )
}

export default RegisterModel;