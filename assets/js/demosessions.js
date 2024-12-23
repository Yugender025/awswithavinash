const classVideos = [
  {
    _id: 1,
    day: "Day 0 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Introduction to program",
    thubnailImg: "assets/images/Day0.jpg",
    infoContainer:
      "Discover the fundamentals of Amazon Web Services (AWS). Learn cloud computing basics, key services, and how to leverage AWS for scalable and efficient solutions in modern technology infrastructure.",
    iframesource: "https://d1mfrlrzgvrt4d.cloudfront.net/demo/Day0.mp4",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 2,
    day: "Day 1 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Introduction to cloud computing",
    infoContainer:
      "Discover the fundamentals of Amazon Web Services (AWS). Learn cloud computing basics, key services, and how to leverage AWS for scalable and efficient solutions in modern technology infrastructure.",
    iframesource: "https://d1mfrlrzgvrt4d.cloudfront.net/demo/Day1.mp4",
    thubnailImg: "assets/images/day1.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 3,
    day: "Day 2 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Service models & aws global Infra",
    infoContainer:
      "we will cover the key aspects of cloud computing service models (IaaS, PaaS, SaaS), the benefits they offer, and provide an overview of AWS's global infrastructure, including Regions, Availability Zones, Edge Locations.",
    iframesource: "https://d1mfrlrzgvrt4d.cloudfront.net/demo/Day2.mp4",
    thubnailImg: "assets/images/day2.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 4,
    day: "Day 3 Demo",
    ClassHeader: "aws class",
    SecondHeader: "AWS Account Creation, MFA Activation & IAM Root User",
    infoContainer:
      "Creating and managing an AWS account, enabling MFA (Multi-Factor Authentication), and managing IAM users and root users are critical steps in securing your AWS environment.",
    iframesource: "https://d1mfrlrzgvrt4d.cloudfront.net/demo/Day3.mp4",
    thubnailImg: "assets/images/day3.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 5,
    day: "Day 4 Demo",
    ClassHeader: "aws class",
    SecondHeader: "IAM User, Alias, and Billing Alerts Setup",
    infoContainer:
      "IAM user creation, alias setup, and billing alerts is crucial for managing AWS accounts securely and efficiently while keeping track of expenses.",
    iframesource: "https://d1mfrlrzgvrt4d.cloudfront.net/demo/Day4.mp4",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
];

function createDaysessions(dayVideos) {
  return `
      <div class="course-sectionDemo">
            <div style="border-radius:12px;" class="video-container" onclick="playVideo(this)">
                <img class="thumbnail" src="${dayVideos.thubnailImg}" alt="Video thumbnail">
                    <svg class="play-button" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" fill="rgba(0,0,0,0.7)" />
                        <path d="M35,25 L75,50 L35,75 Z" fill="white"/>
                    </svg>
               <video style="width:100%; height:100%; border-radius: 12px;" controls="" name="media"><source src="${dayVideos.iframesource}" type="video/mp4"></video> 
            </div>
            
            <div class="content-container">
                <div>
                    <div class="content-header">
                        <h2>${dayVideos.day}:${dayVideos.SecondHeader}</h2>
                    </div>
                    <div class="content-description">
                        <p>${dayVideos.infoContainer}</p>
                    </div>
                </div>
                
                <a href="${dayVideos.register}" target="_blank" class="register-btn">
                    <div style="border: 1px solid black;" class="sm-btn" id="start_Exam">
                        <div  id="how-link" class="get-started">Register now</div>
                        <i class="fa-regular fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>
    `;
}
const awsVideosListContainer = document.querySelector(".Course_contentdaily");

classVideos.forEach((dayVideosaws) => {
  const classSessions = createDaysessions(dayVideosaws);
  awsVideosListContainer.innerHTML += classSessions;
});
