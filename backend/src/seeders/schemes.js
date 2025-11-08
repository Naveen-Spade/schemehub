const schemes = [
  {
    name: "National Scholarship Portal (NSP)",
    description_short: "Centralized platform for various scholarship schemes for students",
    description_full: "The National Scholarship Portal is a one-stop solution for students looking for various scholarship schemes offered by the Government of India. It covers scholarships for students from economically weaker sections, minority communities, and differently-abled students.",
    category_name: "Education",
    eligibility_criteria: [
      "Must be an Indian citizen",
      "Annual family income should not exceed ₹8 lakhs",
      "Minimum 60% marks in previous examination",
      "Enrolled in recognized educational institution"
    ],
    benefits: [
      "Financial assistance up to ₹20,000 per year",
      "Coverage for tuition fees and maintenance allowance",
      "Additional support for disabled students",
      "Direct benefit transfer to bank account"
    ],
    application_steps: [
      "Register on National Scholarship Portal",
      "Fill application form with required details",
      "Upload necessary documents",
      "Submit application before deadline",
      "Track application status online"
    ],
    official_website: "https://scholarships.gov.in",
    state: "All India",
    min_age: 16,
    max_age: 35,
    income_limit: 800000,
    application_deadline: "2024-12-31",
    required_documents: [
      "Aadhaar card",
      "Income certificate",
      "Educational certificates",
      "Bank account details",
      "Residence proof"
    ],
    is_active: true
  },
  {
    name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
    description_short: "Health insurance scheme providing coverage of up to ₹5 lakh per family",
    description_full: "Ayushman Bharat is the world's largest health assurance scheme aiming to provide cashless hospitalization coverage to over 10 crore poor and vulnerable families. The scheme covers secondary and tertiary healthcare expenses.",
    category_name: "Health",
    eligibility_criteria: [
      "Belong to eligible beneficiary families as per SECC data",
      "No age limit for beneficiaries",
      "Must possess valid Aadhaar card",
      "Should not be covered by other health insurance schemes"
    ],
    benefits: [
      "Health coverage of ₹5 lakh per family per year",
      "Cashless hospitalization in empaneled hospitals",
      "Coverage for pre-existing diseases",
      "No restriction on family size"
    ],
    application_steps: [
      "Check eligibility on official website",
      "Visit nearest common service center",
      "Submit application with required documents",
      "Receive Ayushman card",
      "Visit empaneled hospitals for treatment"
    ],
    official_website: "https://pmjay.gov.in",
    state: "All India",
    min_age: 0,
    max_age: null,
    income_limit: null,
    application_deadline: null,
    required_documents: [
      "Aadhaar card",
      "BPL card or ration card",
      "Income certificate",
      "Residence proof",
      "Family photographs"
    ],
    is_active: true
  },
  {
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    description_short: "Skill development program to enable youth to take up industry-relevant skill training",
    description_full: "PMKVY is the flagship scheme of the Ministry of Skill Development & Entrepreneurship aimed at skill development of youth. The objective is to enable a large number of Indian youth to take up industry-relevant skill training.",
    category_name: "Employment",
    eligibility_criteria: [
      "Should be an Indian citizen",
      "Age between 18-35 years",
      "Unemployed or underemployed",
      "Minimum 10th pass or equivalent",
      "Should not have undergone similar training before"
    ],
    benefits: [
      "Free skill training programs",
      "Monetary reward of ₹8,000 upon certification",
      "Placement assistance after training",
      "Certification from recognized authorities",
      "Access to job fairs and employment opportunities"
    ],
    application_steps: [
      "Visit nearest training center",
      "Choose desired skill course",
      "Submit application with documents",
      "Undergo training and assessment",
      "Receive certification and placement support"
    ],
    official_website: "http://pmkvyofficial.org",
    state: "All India",
    min_age: 18,
    max_age: 35,
    income_limit: null,
    application_deadline: "2024-11-30",
    required_documents: [
      "Aadhaar card",
      "Educational certificates",
      "Bank account details",
      "Photographs",
      "Residence proof"
    ],
    is_active: true
  },
  {
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    description_short: "Housing for All scheme to provide affordable housing to urban poor",
    description_full: "PMAY aims to provide affordable housing to urban poor including slum dwellers. The scheme provides financial assistance for construction, augmentation, or renovation of houses.",
    category_name: "Housing",
    eligibility_criteria: [
      "Should be Indian citizen",
      "Annual family income below ₹18 lakhs (EWS/LIG)",
      "Should not own a pucca house in India",
      "Must have valid Aadhaar card",
      "Should be first-time home buyer"
    ],
    benefits: [
      "Interest subsidy up to ₹2.67 lakh on home loans",
      "Financial assistance for house construction",
      "Credit linked subsidy scheme",
      "Affordable housing options",
      "Support for house renovation"
    ],
    application_steps: [
      "Check eligibility on PMAY website",
      "Apply through participating banks",
      "Submit application with required documents",
      "Get loan approval with subsidy",
      "Avail subsidy benefit during loan tenure"
    ],
    official_website: "http://pmaymis.gov.in",
    state: "All India",
    min_age: 21,
    max_age: 70,
    income_limit: 1800000,
    application_deadline: "2025-03-31",
    required_documents: [
      "Aadhaar card",
      "Income certificate",
      "Address proof",
      "PAN card",
      "Bank account details",
      "Photographs"
    ],
    is_active: true
  },
  {
    name: "Beti Bachao Beti Padhao",
    description_short: "Initiative to address declining child sex ratio and empower girls through education",
    description_full: "Beti Bachao Beti Padhao is a comprehensive scheme to address the declining child sex ratio and empower girls through education. The scheme aims to create awareness and improve efficiency of welfare services meant for women.",
    category_name: "Women Empowerment",
    eligibility_criteria: [
      "Girl child born in India",
      "Parents must be Indian citizens",
      "Should have bank account in girl's name",
      "Should be enrolled in school",
      "Family must have valid documents"
    ],
    benefits: [
      "Financial assistance for girl education",
      "Scholarship programs for higher studies",
      "Support for skill development",
      "Health and nutrition benefits",
      "Protection and welfare schemes"
    ],
    application_steps: [
      "Register girl child at local anganwadi center",
      "Open bank account in girl's name",
      "Apply for Sukanya Samriddhi Yojana",
      "Enroll child in school",
      "Regular follow-up for benefits"
    ],
    official_website: "https://betibachao.betipadhao.gov.in",
    state: "All India",
    min_age: 0,
    max_age: 18,
    income_limit: null,
    application_deadline: null,
    required_documents: [
      "Girl's birth certificate",
      "Parents' ID proof",
      "Bank account details",
      "Residence proof",
      "School enrollment proof"
    ],
    is_active: true
  },
  {
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description_short: "Income support scheme for small and marginal farmers",
    description_full: "PM-KISAN is a central sector scheme to provide income support to all landholding farmers' families across the country. The scheme aims to supplement the financial needs of small and marginal farmers.",
    category_name: "Agriculture",
    eligibility_criteria: [
      "Must be a small or marginal farmer",
      "Should own cultivable land",
      "Landholding should be less than 2 hectares",
      "Should have valid land records",
      "Must have bank account and Aadhaar"
    ],
    benefits: [
      "Financial assistance of ₹6,000 per year",
      "Payment in three equal installments",
      "Direct benefit transfer to bank account",
      "No middlemen involved",
      "Timely payment guarantee"
    ],
    application_steps: [
      "Register on PM-KISAN portal",
      "Upload land ownership documents",
      "Provide bank account details",
      "Complete e-KYC verification",
      "Receive first installment"
    ],
    official_website: "https://pmkisan.gov.in",
    state: "All India",
    min_age: 18,
    max_age: null,
    income_limit: null,
    application_deadline: null,
    required_documents: [
      "Aadhaar card",
      "Land ownership documents",
      "Bank account details",
      "Residence proof",
      "Photographs"
    ],
    is_active: true
  },
  {
    name: "Atal Pension Yojana (APY)",
    description_short: "Pension scheme for unorganized sector workers",
    description_full: "Atal Pension Yojana is a government-backed pension scheme focused on the unorganized sector workers. The scheme provides a guaranteed minimum monthly pension after retirement.",
    category_name: "Senior Citizens",
    eligibility_criteria: [
      "Age between 18-40 years",
      "Must have savings bank account",
      "Should be unorganized sector worker",
      "Must have valid Aadhaar card",
      "Should have mobile number"
    ],
    benefits: [
      "Fixed monthly pension ranging from ₹1,000 to ₹5,000",
      "Same pension for spouse after subscriber's death",
      "Government co-contribution for eligible subscribers",
      "Tax benefits under Section 80CCD",
      "Guaranteed pension after age 60"
    ],
    application_steps: [
      "Visit bank branch or apply online",
      "Fill APY registration form",
      "Choose pension amount and contribution frequency",
      "Complete KYC verification",
      "Start contributing regularly"
    ],
    official_website: "https://npslite.nsdl.co.in",
    state: "All India",
    min_age: 18,
    max_age: 40,
    income_limit: null,
    application_deadline: null,
    required_documents: [
      "Aadhaar card",
      "Bank account details",
      "Mobile number",
      "Photographs",
      "Address proof"
    ],
    is_active: true
  },
  {
    name: "Stand Up India Scheme",
    description_short: "Loan scheme for SC/ST and women entrepreneurs",
    description_full: "Stand Up India Scheme facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste/Scheduled Tribe borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.",
    category_name: "Financial Inclusion",
    eligibility_criteria: [
      "Must be SC/ST or woman entrepreneur",
      "Age above 18 years",
      "Should be first-time entrepreneur",
      "Must have viable business plan",
      "Should not have defaulted on any loan"
    ],
    benefits: [
      "Loans from ₹10 lakh to ₹1 crore",
      "Composite loan for manufacturing and service sectors",
      "No collateral required for loans up to ₹10 lakh",
      "Margin money subsidy",
      "Credit guarantee coverage"
    ],
    application_steps: [
      "Prepare detailed business plan",
      "Approach nearest scheduled commercial bank",
      "Submit loan application with documents",
      "Get business plan approved",
      "Receive loan disbursement"
    ],
    official_website: "http://standupmitra.in",
    state: "All India",
    min_age: 18,
    max_age: null,
    income_limit: null,
    application_deadline: null,
    required_documents: [
      "Aadhaar card",
      "Caste certificate (if SC/ST)",
      "Business plan details",
      "Educational certificates",
      "Bank account details",
      "Address proof"
    ],
    is_active: true
  },
  {
    name: "National Rural Livelihood Mission (NRLM)",
    description_short: "Poverty alleviation program for rural poor",
    description_full: "NRLM aims to reduce poverty by promoting self-employment and organization of rural poor into Self Help Groups (SHGs). The scheme focuses on building strong institutions for the poor.",
    category_name: "Financial Inclusion",
    eligibility_criteria: [
      "Rural household below poverty line",
      "Willing to form or join SHG",
      "Should be from marginalized community",
      "Must have bank account",
      "Should participate in group activities"
    ],
    benefits: [
      "Financial assistance through SHGs",
      "Skill development training",
      "Access to credit facilities",
      "Market linkages for products",
      "Social security benefits"
    ],
    application_steps: [
      "Form or join SHG in village",
      "Register with local NRLM office",
      "Complete group training programs",
      "Apply for group loans",
      "Start income-generating activities"
    ],
    official_website: "https://aajeevika.gov.in",
    state: "All India",
    min_age: 18,
    max_age: 65,
    income_limit: 120000,
    application_deadline: null,
    required_documents: [
      "Aadhaar card",
      "BPL certificate",
      "Bank account details",
      "Residence proof",
      "Group registration documents"
    ],
    is_active: true
  },
  {
    name: "Digital India Literacy Program",
    description_short: "Digital literacy training for rural citizens",
    description_full: "The Digital India Literacy Program aims to make rural citizens digitally literate. The program provides training on using computers, smartphones, internet, and digital payment systems.",
    category_name: "Education",
    eligibility_criteria: [
      "Age between 14-60 years",
      "Rural resident",
      "Should have basic education",
      "Willingness to learn digital skills",
      "Must have valid ID proof"
    ],
    benefits: [
      "Free digital literacy training",
      "Certificate upon completion",
      "Access to digital services",
      "Improved employment opportunities",
      "Ability to use online government services"
    ],
    application_steps: [
      "Register at nearest Common Service Center",
      "Attend 20 hours of training",
      "Complete practical assessment",
      "Receive digital literacy certificate",
      "Access online learning resources"
    ],
    official_website: "https://digitalindia.gov.in",
    state: "All India",
    min_age: 14,
    max_age: 60,
    income_limit: null,
    application_deadline: "2024-12-15",
    required_documents: [
      "Aadhaar card",
      "Address proof",
      "Photographs",
      "Educational certificate (if any)",
      "Mobile number"
    ],
    is_active: true
  }
];

module.exports = schemes;