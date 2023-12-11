import {Link} from "react-router-dom"
const footer =() =>{
return <>

<div className="email-box" style={{paddingLeft:10+'vw',color:'white'}}>
<form action="https://inl02.netline.com/rssnews0001/" className="clear cf" id="subform" method="post" name="f1">
<div className="email-box-h3" style={{fontSize: 22+'px',
    fontWeight: 500,
    color: 'white',
    lineHeight: 25+"px",
    display: 'block'}}>Join 120,000+ Professionals</div>
<p>Sign up for free and start receiving your daily dose of cybersecurity news, insights and tips.</p>
<div className="email-input">
<input name="_submit" type="hidden" value="0001"/>
<input id="brand" name="brand" type="hidden" value="thehackernews"/>
<div className="e-book"><input checked="yes" id="opt_001" name="opt_001" type="checkbox" value="Y"/><input checked="yes" id="opt_003" name="opt_003" type="checkbox" value="Y"/></div><label className="visuallyhidden">Email</label><input className="text" id="input-email" name="email" placeholder="Your e-mail address" required="" type="email"/>
<button aria-label="Subscribe" id="submitform" type="button" value="Subscribe"></button>
</div>
</form>
</div>

<footer className="footer cf" style={{paddingLeft:10+'vw',paddingRight:10+'vw'}}>
<div className="footer-box clear">
<div className="footer-stuff clear cf" style={{justifyContent:'center'}}>
<div className="footer-box-h4" id="follow-us" style={{textAlign:'center',marginBottom:4+'vh'}}><h4>Connect with us!</h4></div>
<div className="row" style={{display:'flex',justifyContent:'space-between'}}>
<div className="social-box s-tw"><Link aria-label="twitter" href="https://twitter.com/thehackersnews" rel="noopener" ><i className="icon-twitter" style={{width:3+'vw',height:3+'vh',fontSize:5+'em',marginLeft:2.5+'vw'}}></i><div className="">905,000 Followers</div></Link></div>
<div className="social-box s-fb"><Link aria-label="facebook" href="https://www.facebook.com/thehackernews" rel="noopener" ><i className="icon-facebook" style={{width:3+'vw',height:3+'vh',fontSize:5+'em',marginLeft:2.5+'vw'}}></i><div className="sb-text">1,950,000 Followers</div></Link></div>
<div className="social-box s-in"><Link aria-label="linkedin" href="https://www.linkedin.com/company/thehackernews/" rel="noopener" ><i className="icon-linkedin" style={{width:3+'vw',height:3+'vh',fontSize:5+'em',marginLeft:2.5+'vw'}}></i><div className="sb-text">500,000 Followers</div></Link></div>
<div className="social-box s-yt"><Link aria-label="youtube" href="https://www.youtube.com/c/thehackernews?sub_confirmation=1" rel="noopener" ><i className="icon-youtube" style={{width:3+'vw',height:3+'vh',fontSize:5+'em',marginLeft:2.5+'vw'}}></i><div className="sb-text">22,000 Subscribers</div></Link></div>
<div className="social-box s-it"><Link aria-label="instagram" href="https://www.instagram.com/thehackernews/" rel="noopener" ><i className=" icon-instagram" style={{width:3+'vw',height:3+'vh',fontSize:5+'em',marginLeft:2.5+'vw'}}></i><div className="sb-text">148,000 Followers</div></Link></div>
<div className="social-box s-tel"><Link aria-label="telegram" href="https://t.me/joinchat/AAAAADwuDObFWF60CiR-HQ" rel="noopener" style={{justifyContent:'center'}} ><i className="icon-pinterest" style={{width:3+'vw',height:3+'vh',fontSize:5+'em',marginLeft:2.5+'vw'}}></i><div className="sb-text">120,000 Subscribers</div></Link></div>
</div>
<nav className="row" style={{flexWrap:'wrap',marginTop:10+'vh'}}>
<div className="col">
<div className="" style={{fontWeight:'bold'}}>Company</div>
<ul className="cf f-menu-list cf">
<li><Link href="/p/about-us.html">About THN</Link></li>
<li><Link href="/p/advertising-with-hacker-news.html">Advertise with us</Link></li>
<li><Link href="/p/submit-news.html">Contact</Link></li>
</ul>
</div>
<div className="col">
<div className="" style={{fontWeight:'bold'}}>Pages</div>
<ul className="cf f-menu-list cf">
<li><p>Webinars</p></li>
<li><p href="https://deals.thehackernews.com/search?query=cybersecurity%2Bhacking%2BVPN%2Bsoftware" rel="noopener">Deals Store</p></li>
<li><p href="/p/privacy-policy.html">Privacy Policy</p></li>
</ul>
</div>
<div className="col">
<div className="footer-box-h5" style={{fontWeight:'bold'}}>Deals</div>
<ul className="cf f-menu-list cf">
<li><Link href="https://deals.thehackernews.com/collections/hacking" rel="noopener" >Hacking</Link></li>
<li><Link href="https://deals.thehackernews.com/collections/shop-by-specialization-developer" rel="noopener" >Development</Link></li>
<li><Link href="https://deals.thehackernews.com/collections/shop-by-interest-android" rel="noopener">Android</Link></li>
</ul>
</div>
<div className="col">
<div className="col">
<Link className="btn btn-dark btn-lg-6" style={{width:10+'vw',padding:5+'px',backgroundColor:'darkgray',borderRadius:6+'px',fontSize:15+'px',margin:15+'px'}} href="https://feeds.feedburner.com/TheHackersNews" rel="noopener">
<div className="f-menu-bt f-rss"><i className="icon-font icon-rss"></i> RSS Feeds</div></Link>
<Link className="btn" style={{width:10+'vw',padding:5+'px',backgroundColor:'darkgray',borderRadius:6+'px',fontSize:15+'px',margin:15+'px'}} href="/p/submit-news.html">
<div className="f-menu-bt"><i className="icon-font icon-mail-alt"></i> Contact Us</div></Link>
</div>
</div>
</nav>
<div className="footer-note cf">© The Hacker News, 2023. All Rights Reserved.</div>
</div>
</div>
</footer>

</>

}
export default footer