import { useEffect, useRef, useState } from 'react';
import './App.css';
import data from './data';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaPython } from 'react-icons/fa';

function App() {
  
  const [classScroll, setClassScroll] = useState('');
  const [isType, setIsType] = useState(false);

  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);



  // Closures
  function openText() {
    
    let i = 0;      // Data privacy
    const txt = " Apply for software developer jobs";

    return  function typingOpenText() {
      document.documentElement.scrollTop = 0;
      document.documentElement.style.overflowY = 'hidden';

      if(i < txt.length) { 
      document.querySelector('.open-text').innerHTML += txt.charAt(i);
      // console.log('i =', i);
      // console.log(txt.charAt(i));
      i++;
      setTimeout(typingOpenText, 140);
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
              }, 10)
            }, 100)
          }, 100)
        }, 200)
      }
      
    }
  }
  const openMessage = openText(); // openMessage is the same as typingOpenText fucntion

  useEffect(() => {
    // openMessage();
  }, [isType]);


  // background change 
  // const checkPointScreen1 = window.screen.height / 1.5 ; //66.66%  //อนากให้เปลี่ยนรูปแบบ 100% ในส่วนไหนของ screen
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    // opacity decrease slightly from 1 to 0
    const checkPointScreenOne = window.screen.height / 1.5 ; //66.66% of screen-1,  opacity = 0 when come to here
    let opacityValueScreenOne = null;
    if(currentScroll < checkPointScreenOne) {
      opacityValueScreenOne = 1 - (currentScroll / checkPointScreenOne); // gradually decrease from 100% opacity
    } 
    else {
      opacityValueScreenOne = 0; // ใส่ไว้ เพื่อให้เวลาเรา scroll ลงมาแล้วมันเลย checkpoint จะได้เป็น 0 ไม่งั้นมันจะกลับไปเป็น null
    }                   // ถ้าไม่ใส่ else จะทำให้เลื่อนลง scroll แล้ว opacity มันจะกลับไปเป็นค่าเดิม สีจะถูกเติมเข้ามา
    document.querySelector('.screen-1').style.opacity = opacityValueScreenOne;

    // opacity increase slightly from 0 to 1 
    const h = window.innerHeight;    
    const msg1 = document.querySelector('.msg-1').offsetTop;
    const msg2 = document.querySelector('.msg-2').offsetTop;
    const msg3 = document.querySelector('.msg-3').offsetTop;
    const msg4 = document.querySelector('.msg-4').offsetTop;
    const checkPointMSG1 = msg1 / (h*2) ; // *2 เพื่อจะลดค่า checkpoint หน่อย เดี๋ยวไม่ทันได้ fadin มันจะเลยขึ้นไปหน้าจอเสียก่อน่่
    const checkPointMSG2 = msg2 / (h*2) ; // *2 เพื่อจะลดค่า checkpoint หน่อย เดี๋ยวไม่ทันได้ fadin มันจะเลยขึ้นไปหน้าจอเสียก่อน่่
    const checkPointMSG3 = msg3 / (h*2) ; // *2 เพื่อจะลดค่า checkpoint หน่อย เดี๋ยวไม่ทันได้ fadin มันจะเลยขึ้นไปหน้าจอเสียก่อน่่
    const checkPointMSG4 = msg4 / (h*1.5) ; // *2 เพื่อจะลดค่า checkpoint หน่อย เดี๋ยวไม่ทันได้ fadin มันจะเลยขึ้นไปหน้าจอเสียก่อน่่
    const yToH = currentScroll/h

    if(yToH >= checkPointMSG1) {
      document.querySelector('.msg-1').style.opacity = (yToH**2.4) - 1; // ยกกำลังเพื่อให้เป็น exponential
    } else {
      document.querySelector('.msg-1').style.opacity = 0; 
    }
    if(yToH >= checkPointMSG2) {
      document.querySelector('.msg-2').style.opacity = (yToH**1.8) - 2.6; // ยกกำลังเพื่อให้เป็น exponential
    } else {
      document.querySelector('.msg-2').style.opacity = 0; 
    } 
    if(yToH >= checkPointMSG3) {
      document.querySelector('.msg-3').style.opacity = (yToH**1.7) - 4.3; // ยกกำลังเพื่อให้เป็น exponential
      document.querySelector('.navbar').style.opacity = (yToH**1.7) - 4.3; // ยกกำลังเพื่อให้เป็น exponential
    } else {
      document.querySelector('.msg-3').style.opacity = 0; 
    } 
    if(yToH >= checkPointMSG4) {
      document.querySelector('.msg-4').style.opacity = (yToH**1.8) - 5; // ยกกำลังเพื่อให้เป็น exponential
      document.querySelector('.msg-4').style.fontSize = `${(yToH**4.2) + (-80)}` + "px"; // ยกกำลังเพื่อให้เป็น exponential
    } else {
      document.querySelector('.msg-4').style.opacity = 0; 
    } 
    if(yToH >= 1.8) {
      document.querySelector('.screen-2-2').style.opacity = (yToH**1.2) - 2; // ยกกำลังเพื่อให้เป็น exponential
    }
  });

  // smth is callback (if need be)
  function scrollToSection(elementRef, smth) {
    window.scrollTo({
      top: elementRef.current.offsetTop, 
      behavior: 'smooth'
    });
    if(smth) {
      smth();
    };
  }


  // version 1
  // const cardElements = data.data.projects.map((project) => {
  //   return (
  //     <a className='link-ele' href={project.link}>
  //       <img className={`image-project ${project.id}`} src={project.image} />
  //       <div className='title'>{project.name}</div>
  //     </a>
  //   )
  // });
  
  // version 2 
  const cardElements2 = data.data.projects.map((project) => {
    return (
      <div className='item'>
        <div className='content'>
         <a className='link-ele' href={project.link}>
          <img className={`image-project ${project.id}`} src={project.image} />
          <div className='title'>{project.name}</div>
        </a>
        </div>
      </div>
    )
  });

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
            {/* <div className='logo' onClick={() => scrollToSection(home)}>~</div> */}
            <div className='logo' onClick={() => scrollToSection(home, setTimeout(() => { return setIsType((prev) => !prev)}, 1000))}>~</div>
          </div>
          <div className='nav-right'>
            <div className='about' onClick={() => scrollToSection(about)}>about</div> 
            <div className='project' onClick={() => {scrollToSection(project)}}>project</div> 
            <div className='contact' onClick={() => {scrollToSection(contact)}}>contact</div> 
          </div>
        </nav>
        <main className='main'>
          <div className='screen-2-1'>
            <div className='msg-1'>sometimes</div>
            <div className='msg-2'>at the beginning</div> 
          </div>
          <div className='screen-2-2'>
            <div className='msg-3'>the simplest things</div>
            <div className='msg-4'>can be challenging</div>
          </div>
        </main>
        <div className='screen-2-3' ref={about}>
          <div className='about-container'>
            <div className='about-me'>
              <h1>About</h1>
              <div>Hello, I'm Watt</div>
              <div>Self-taught developer</div>
            </div>
            <div className='about-skill'>
              <div className='skills'>Skills</div>
              <div className='skills-icon'>
                <div className='html-icon'><AiFillHtml5/> HTML</div>
                <div className='css-icon'><IoLogoCss3/> CSS</div>
                <div className='js-icon'><IoLogoJavascript/> Javascript</div>
                <div className='react-icon'><FaReact/> ReactJS</div>
                <div className='python-icon'><FaPython/> Python</div>
              </div>
            </div>
          </div>
        </div>
        <div className='screen-2-4' ref={project}>
          <div className='project-header'>Let's see mini project</div>

          {/* version 1 */}
          {/* <div className='card-elements'>
            {cardElements}
          </div> */}

          {/* version 2 */}
          <section className='out-of-grid'>
            <div className='grid'>
              {cardElements2}
            </div>
          </section>

        </div>
        <footer ref={contact}>
          <div className='email'><a className='email' href = "mailto: muawatt@gmail.com">watavince@gmail.com</a></div>
          <div className='contact-list'>
            <a href='https://github.com/muwaii'><img className='github' src="github-icon.svg" /></a>
            <a href='https://www.instagram.com/'><img className='ig' src="ig-icon.svg" /></a>
            <a href='https://twitter.com/'><img className='twitter' src="twitter-icon.svg" /></a>
            <a href='https://line.me/ti/p/2XwPPYDJsc'><img className='line' src="line-icon.svg" /></a>
          </div>
        </footer>
      </div>   
    </div>
  );
}

export default App;
