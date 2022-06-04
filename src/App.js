// import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useRef, useState } from 'react';
import './App.css';



function App() {
  
  const [classScroll, setClassScroll] = useState('');

  const home = useRef(null);



  // Closures
  function openText() {
    
    let i = 0;      // Data privacy
    const txt = " Apply for a front-end developer job";

    return  function typingOpenText() {
      document.documentElement.scrollTop = 0;
      document.documentElement.style.overflowY = 'hidden';

      if(i < txt.length) { 
      document.querySelector('.open-text').innerHTML += txt.charAt(i);
      // console.log('i =', i);
      // console.log(txt.charAt(i));
      i++;
      setTimeout(typingOpenText, 1);
      } else {
        setTimeout(() => {
          document.querySelector('.l-1').innerHTML = '|';
          setTimeout(() => {
            document.querySelector('.v-1').innerHTML = 'v';
            setTimeout(() => {
              document.querySelector('.scroll').innerHTML = 'scroll down';
              setTimeout(() => {
                document.documentElement.style.overflowY = 'auto';
                setTimeout(() => {
                  setClassScroll("scroll-text-blink");
                  // document.querySelector('.scroll').classList.add("scroll-text-blink");
                })
              }, 100)
            }, 150)
          }, 500)
        }, 800)
      }
      
    }
  }
  const openMessage = openText(); // openMessage is the same as typingOpenText fucntion

  useEffect(() => {
    openMessage();
  }, []);


  // background change 
  // const checkPointScreen1 = window.screen.height / 1.5 ; //66.66%  //อนากให้เปลี่ยนรูปแบบ 100% ในส่วนไหนของ screen
  window.addEventListener("scroll", () => {
    // *** This is where we at ***
    const currentScroll = window.scrollY;

    // This is 1 to 0
    // opacity decrease slightly (start from y = 0, opacity = 1 to )
    const checkPointScreenOne = window.screen.height / 1.5 ; //66.66% of screen-1,  opacity = 0 when come to here
    let opacityValueScreenOne = null;
    if(currentScroll < checkPointScreenOne) {
      opacityValueScreenOne = 1 - (currentScroll / checkPointScreenOne); // gradually decrease from 100% opacity
    } 
    else {
      opacityValueScreenOne = 0; // ใส่ไว้ เพื่อให้เวลาเรา scroll ลงมาแล้วมันเลย checkpoint จะได้เป็น 0 ไม่งั้นมันจะกลับไปเป็น null
    }                   // ถ้าไม่ใส่ else จะทำให้เลื่อนลง scroll แล้ว opacity มันจะกลับไปเป็นค่าเดิม สีจะถูกเติมเข้ามา
    document.querySelector('.screen-1').style.opacity = opacityValueScreenOne;


    // This is 0 to 1
    // opacity increase slightly ()
    const h = window.screen.height;    //อันนี้ต้องเอาความสูงของกรอบ main
    const checkPointMainFirst = null;
    let opacityMainFirst = 0;
    if( currentScroll > checkPointMainFirst) {
      // console.log("Main 1 appear", current)
      // opacityMainFirst = currentScroll/h - 1.185  
    } 
    // else {
      
    // } 
    // document.querySelector('.main p:first-of-type').style.opacity = opacityMainFirst;



  });




  // just test seeing Y axis ------------------ and make text fade in
  window.onscroll = () => {
    const y = window.scrollY;  // อันนี้ความสูงของ เคอเซอร์แนวตั้งอะ เริ่มจาก 0
    const h = window.innerHeight; // same as window.screen.height คือความสูงของหน้าจอ
    const percent = y/h
    console.log("Y =", y, " ","window height =" , h, " ","% =", percent);
  // -----------------------------------------
  }

  function scrollToSection(elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop, 
      behavior: 'smooth'});
  }
  

  return (
    <div className="App">
      <div className='screen-1' ref={home}>
        <div className='open-text'></div>
        <div className='scrolldown-symbol-container'>
          <div className='l-1'></div>
          <div className='v-1'></div>
          <div className={`scroll ${classScroll}`}></div>
        </div>
      </div>
      <div className='screen-2'>
        <nav className={`navbar`}>
          <div className='nav-left'>
            <div className='logo' onClick={() => scrollToSection(home)}>~</div>
          </div>
          <div className='nav-right'>
            <div className='about'>about</div> 
            <div className='project'>project</div> 
            <div className='contact'>contact</div> 
          </div>
        </nav>
        <main className='main'>
          <div className='screen-2-1'>
            <div className='msg-1'>at the beginning</div> {/* show when y/H = 0.7 */}
            <div className='msg-2'>sometimes</div>
          </div>
          <div className='screen-2-2'>
            <div className='msg-3'>the simplest things</div>
            <div className='msg-4'>can be challenging</div>
          </div>
        </main>
      </div>   {/* ^ screen 2 */}



    </div>
  );
}

export default App;


// Sometimes
// The simplest things
// Can be challenging

// Especially at the beginning