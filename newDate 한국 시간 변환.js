const handleDate = (createdAt) => {

    if(createdAt !== undefined){


      let date = new Date(createdAt);

      const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
      const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
      const kr_curr = utc + (KR_TIME_DIFF);

      date = new Date(kr_curr).toString();

      let splitDate = date.split(' ');
      let month = splitDate[1];
      let day =  splitDate[2];
      let year = splitDate[3];
      let time = splitDate[4].slice(0,5);
  
      return `asked ${month} ${day}, ${year} at ${time}`

    }
  }