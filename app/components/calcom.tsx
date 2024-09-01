'use client';

import React from 'react';
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function CalCom() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15min"});
		cal("ui", {"styles":{"branding":{"brandColor":"#00a0b0"}},"hideEventTypeDetails":true,"layout":"month_view"});
	  })();
	}, [])
	return (
        <button data-cal-namespace="15min"
            data-cal-link="theofficialbarn/15min"
            data-cal-config='{"layout":"month_view"}'
            className="w-full py-2 px-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-offset-gray-400 focus:ring-offset-2">
        Schedule a Meeting
        </button>
    );
  };
  