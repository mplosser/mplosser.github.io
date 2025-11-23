// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-readme",
    title: "readme",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
            window.location.href = "/shortform/";
          },
        },{id: "nav-repository",
          title: "repository",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repository/";
          },
        },{id: "nav-freeform",
          title: "freeform",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/freeform/";
          },
        },{id: "post-economic-capital-a-better-measure-of-bank-failure",
        
          title: 'Economic Capital: A Better Measure of Bank Failure? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Introducing a new solvency metric that identifies failing banks earlier and more accurately than traditional measures",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2025/11/economic-capital-a-better-measure-of-bank-failure/", "_blank");
          
        },
      },{id: "post-economic-capital-a-new-measure-of-bank-solvency",
        
          title: 'Economic Capital: A New Measure of Bank Solvency <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A novel solvency metric incorporating interest rate changes, credit spreads, and deposit stability risks",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2025/09/economic-capital-a-new-measure-of-bank-solvency/", "_blank");
          
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
      },{id: "post-interest-rates-up-but-not-on-your-savings-account",
        
          title: 'Interest Rates Up, But Not on Your Savings Account <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Podcast appearance explaining why savings account interest rates lag Federal Reserve rate hikes and the concept of deposit betas",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.npr.org/2023/01/23/1150716029/the-fed-has-been-raising-interest-rates-why-then-are-savings-interest-rates-low", "_blank");
          
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
      },{id: "post-weathering-the-storm-who-can-access-credit-in-a-pandemic",
        
          title: 'Weathering the Storm: Who Can Access Credit in a Pandemic? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining credit access disparities during COVID-19, showing large firms increased drawdowns while small businesses couldn&#39;t access pre-committed credit",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2020/10/weathering-the-storm-who-can-access-credit-in-a-pandemic/", "_blank");
          
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
      },{id: "post-analyzing-the-effects-of-cfpb-oversight",
        
          title: 'Analyzing the Effects of CFPB Oversight <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining how CFPB supervision affected mortgage lending, finding a de-risking effect rather than reduced credit supply",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2018/10/analyzing-the-effects-of-cfpb-oversight/", "_blank");
          
        },
      },{id: "post-the-cost-of-regulatory-capital",
        
          title: 'The Cost of Regulatory Capital <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How capital regulations affect bank pricing, estimating banks&#39; willingness to pay to reduce regulatory capital requirements",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2018/10/the-cost-of-regulatory-capital/", "_blank");
          
        },
      },{id: "post-international-trade-and-household-debt-how-import-competition-from-china-helped-fuel-the-credit-bubble",
        
          title: 'International Trade and Household Debt: How Import Competition from China Helped Fuel the... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Analyzing how import competition explains 30% of cross-regional variation in household debt growth during the 2000s",
        section: "Posts",
        handler: () => {
          
            window.open("https://cepr.org/voxeu/columns/international-trade-and-household-debt-how-import-competition-china-helped-fuel", "_blank");
          
        },
      },{id: "post-buyout-activity-the-impact-of-aggregate-discount-rates",
        
          title: 'Buyout Activity: The Impact of Aggregate Discount Rates <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining how market risk premiums drive leveraged buyout cycles, showing common changes in equity and debt costs explain booms and busts",
        section: "Posts",
        handler: () => {
          
            window.open("https://corpgov.law.harvard.edu/2016/08/30/buyout-activity-the-impact-of-aggregate-discount-rates/", "_blank");
          
        },
      },{id: "post-did-the-supervisory-guidance-on-leveraged-lending-work",
        
          title: 'Did the Supervisory Guidance on Leveraged Lending Work? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Analyzing the effectiveness of 2013 leveraged lending guidance, finding large banks reduced activity while nonbanks increased",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2016/05/did-the-supervisory-guidance-on-leveraged-lending-work/", "_blank");
          
        },
      },{id: "post-how-does-supervision-affect-banks",
        
          title: 'How Does Supervision Affect Banks? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Research showing increased supervisory attention reduces bank riskiness without impacting earnings or growth",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2016/04/how-does-supervision-affect-banks/", "_blank");
          
        },
      },{id: "post-the-effect-of-fed-funds-rate-hikes-on-consumer-borrowing-costs",
        
          title: 'The Effect of Fed Funds Rate Hikes on Consumer Borrowing Costs <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Analyzing how federal funds rate changes affect consumer lending rates, showing loan maturity matters more than credit quality",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2015/12/the-effect-of-fed-funds-rate-hikes-on-consumer-borrowing-costs/", "_blank");
          
        },
      },{id: "post-what-drives-buyout-booms-and-busts",
        
          title: 'What Drives Buyout Booms and Busts? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining how overall cost of capital, rather than debt alone, drives leveraged buyout activity cycles",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2015/06/what-drives-buyout-booms-and-bust/", "_blank");
          
        },
      },{id: "post-why-do-banks-keep-all-that-39-fracking-39-money",
        
          title: 'Why Do Banks Keep All That &#39;Fracking&#39; Money? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Examining why banks in energy regions reduced lending allocations and increased liquid asset holdings during the financial crisis",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2014/12/why-do-banks-keep-all-that-fracking-money/", "_blank");
          
        },
      },{id: "post-what-do-banks-do-with-all-that-39-fracking-39-money",
        
          title: 'What Do Banks Do with All That &#39;Fracking&#39; Money? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How deposit inflows from oil and gas royalty payments affect bank lending, with banks allocating 25% to lending and 75% to liquid assets",
        section: "Posts",
        handler: () => {
          
            window.open("https://libertystreeteconomics.newyorkfed.org/2014/12/what-do-banks-do-with-all-that-fracking-money/", "_blank");
          
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
