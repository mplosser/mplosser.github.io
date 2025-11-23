// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-longform",
          title: "longform",
          description: "Research papers and working papers in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/longform/";
          },
        },{id: "nav-shortform",
          title: "shortform",
          description: "Blog posts and shorter writings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/shortform/index.html";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-reserves-and-where-to-find-them",
        
          title: 'Reserves and Where to Find Them <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Analysis of bank reserve holdings and distribution across the banking system",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2025/06/reserves-and-where-to-find-them/", "_blank");
          
        },
      },{id: "post-when-the-household-pie-shrinks-who-gets-their-slice",
        
          title: 'When the Household Pie Shrinks, Who Gets Their Slice? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining how households prioritize debt payments during economic stress",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2025/03/when-the-household-pie-shrinks-who-gets-their-slice/", "_blank");
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-deposits-and-the-march-2023-banking-crisis-a-retrospective",
        
          title: 'Deposits and the March 2023 Banking Crisis—A Retrospective <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A retrospective analysis of deposit dynamics during the March 2023 banking crisis",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2024/03/deposits-and-the-march-2023-banking-crisis-a-retrospective/", "_blank");
          
        },
      },{id: "post-bank-funding-during-the-current-monetary-policy-tightening-cycle",
        
          title: 'Bank Funding during the Current Monetary Policy Tightening Cycle <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How banks adjust their funding strategies during monetary policy tightening",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2023/05/bank-funding-during-the-current-monetary-policy-tightening-cycle/", "_blank");
          
        },
      },{id: "post-how-do-interest-rates-and-depositors-impact-measures-of-bank-value",
        
          title: 'How Do Interest Rates (and Depositors) Impact Measures of Bank Value? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining the relationship between interest rates, depositor behavior, and bank valuations",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2023/04/how-do-interest-rates-and-depositors-impact-measures-of-bank-value/", "_blank");
          
        },
      },{id: "post-does-the-cra-increase-household-access-to-credit",
        
          title: 'Does the CRA Increase Household Access to Credit? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Analyzing the Community Reinvestment Act&#39;s impact on consumer credit access",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2023/02/does-the-cra-increase-household-access-to-credit/", "_blank");
          
        },
      },{id: "post-how-do-deposit-rates-respond-to-monetary-policy",
        
          title: 'How Do Deposit Rates Respond to Monetary Policy? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Evaluating the pass-through of federal funds rate changes to deposit rates",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2022/11/how-do-deposit-rates-respond-to-monetary-policy/", "_blank");
          
        },
      },{id: "post-who-pays-what-first-debt-prioritization-during-the-covid-pandemic",
        
          title: 'Who Pays What First? Debt Prioritization during the COVID Pandemic <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How households prioritized different types of debt payments during the COVID-19 pandemic",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2021/03/who-pays-what-first-debt-prioritization-during-the-covid-pandemic/", "_blank");
          
        },
      },{id: "post-the-banking-industry-and-covid-19-lifeline-or-life-support",
        
          title: 'The Banking Industry and COVID‑19: Lifeline or Life Support? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Assessing the banking sector&#39;s role and resilience during the COVID-19 pandemic",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2020/10/the-banking-industry-and-covid-9-lifeline-or-life-support/", "_blank");
          
        },
      },{id: "post-how-does-supervision-affect-bank-performance-during-downturns",
        
          title: 'How Does Supervision Affect Bank Performance during Downturns? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining the impact of bank supervision on performance during economic downturns",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2020/04/how-does-supervision-affect-bank-performance-during-downturns/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Plosser.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%74%74%68%65%77.%70%6C%6F%73%73%65%72@%68%65%79.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mplosser", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=GDVR6xsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
