import githubLogo  from '../assets/img/github-6980894_1280 (1).webp'
import linkedinLogo from '../assets/img/Linkedin-icon.png'

export const Contact = () => {
    return (
        <div class="flex-col mt-20 mb-20 w-1/2 ml-auto mr-auto">
            <div>
                <h1 class="text-5xl ">Contact</h1>
            </div>
            <br />
            <div>
                <p>Max Gemereth</p>
                
                <p>email :  gemereth.max@gmail.com</p>
                <p>Phone : +1 (513)-290-6552</p>
                <br />
                <div class="flex hover:opacity-70 transition-opacity duration-100"> 
                    <a href="https://github.com/gemerethmax"><img class="size-5 mr-2" src={githubLogo} alt="githubLogo"/></a>
                    <a href="https://github.com/gemerethmax"><p>Github account</p></a>
                </div>
                <div class="flex hover:opacity-70 transition-opacity duration-100">
                    <a href="https://www.linkedin.com/in/max-gemereth-711193203"><img class="size-5 bg-white mr-2" src={linkedinLogo} alt="linkedinLogo"/></a>
                    <a href="https://www.linkedin.com/in/max-gemereth-711193203"><p>LinkedIn account</p></a>
                </div>
            </div>
        </div>
 )
}