import './achievement.css'



import Image from "next/image";
import aiicert from './../picture/achievement/aiicert.jpg'
import publicspeaking from './../picture/achievement/publicspeakingcert.jpg'
import southeastcert from './../picture/achievement/basiccomputer.jpg'
import examgrade9 from './../picture/achievement/khmergrade9.jpg'
import examgrade12 from './../picture/achievement/khmergrade12.jpg'

export default function achievement(){
    return(<>
        <div className="ach-overall-con" >
            <div className="ach-1st-con" >
            
                <Image className="ach-1st-img" src={aiicert} ></Image>
                <p className='ach-1st-p' >I have been studying at Aii language center since 2018 
                and finished In 2023.  All these years, I have been 
                through a lot of projects such as volunteering and 
                charity.  After I finished my program, I could speak
                English and use It in my work field.</p>
            
            </div>

            <div className="ach-2st-con" >
            
                <Image className="ach-2st-img" src={publicspeaking} ></Image>
                <p className='ach-1st-p' >At Aii language center, I'm not only
                 learning the language but I also training myself to be a speaker
                  by improving confidence and Social interaction.  After all 
                  these year, I used to join a lot of competitions and as a result
                   from hard work and dedication I manage to win the trophy of 
                   Public Speaking Championship 2022</p>

            </div>

            <div className="ach-3st-con" >
            
                <Image className="ach-2st-img" src={southeastcert} ></Image>
                <p className='ach-1st-p' >After I knew what my passion and the goal
                 that I wanted, I started to begin my IT journey with Southeast Asia
                  Language School with the basic computer program and I managed to
                   finish faster than the school expected. I been using computer since
                    I was 8 years old and use it for gaming but today, it changed.</p>

            </div>

            <div className="ach-4st-con" >
            
                <Image className="ach-4st-img" src={examgrade9} ></Image>
                <p className='ach-4st-p' >My High school life is a bit fun 
                with a ton of friend around. All these 12 years of studying
                 and hard work, I managed to passed the 2 most important exam
                  of my high school life. It not effect much for my future job
                   but at least I made my mom smile.</p>
                <Image className="ach-4st-img" src={examgrade12} ></Image>
            </div>
        </div>
    </>)
}