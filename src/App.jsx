import React from "react";
import {
  Box,
  Container,
  VStack,
  useColorModeValue,
  Divider,
  IconButton,
  Tooltip,
  useColorMode,
  HStack,
  Collapse,
  Heading,
  Text,
  Tag,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Link,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaChevronDown,
  FaChevronUp,
  FaStar,
} from "react-icons/fa";
import {
  SiPython, SiC, SiMysql, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiPowerbi, SiJupyter, SiGooglecolab, SiVercel, SiDocker, SiReact, SiFastapi, SiPostgresql, SiGit, SiAnaconda, SiWindows, SiLinux
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: SiPython, level: 95 },
  { name: "C", icon: SiC, level: 80 },
  { name: "Pandas", icon: SiPandas, level: 90 },
  { name: "NumPy", icon: SiNumpy, level: 90 },
  { name: "Scikit-learn", icon: SiScikitlearn, level: 88 },
  { name: "Tensorflow", icon: SiTensorflow, level: 80 },
  { name: "Pytorch", icon: SiPytorch, level: 75 },
  { name: "Matplotlib", icon: SiPandas, level: 85 },
  { name: "Seaborn", icon: SiPandas, level: 80 },
  { name: "Power BI", icon: SiPowerbi, level: 70 },
  { name: "MySQL", icon: SiMysql, level: 80 },
  { name: "MongoDB", icon: SiMongodb, level: 75 },
  { name: "Windows", icon: SiWindows, level: 90 },
  { name: "Linux", icon: SiLinux, level: 80 },
  { name: "Google Colab", icon: SiGooglecolab, level: 85 },
  { name: "Jupyter Notebook", icon: SiJupyter, level: 90 },
  { name: "VS Code", icon: SiVercel, level: 85 },
  { name: "Git", icon: SiGit, level: 80 },
  { name: "Anaconda", icon: SiAnaconda, level: 80 },
  { name: "Docker", icon: SiDocker, level: 70 },
  { name: "React.js", icon: SiReact, level: 70 },
  { name: "FastAPI", icon: SiFastapi, level: 65 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 65 },
];

const certifications = [
  {
    title: "AI/ML for Geodata Analysis",
    org: "ISRO",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1ZpsOSzFQZ_B5XZprfKLuSKucufPRJsaT/view?usp=sharing"
  },
  {
    title: "Next-Gen AI and ML - 1-week Workshop",
    org: "—",
    date: "Nov 2024",
    link: null
  },
  {
    title: "Python for Data Science, AI & Development",
    org: "IBM (Coursera)",
    date: "",
    link: null
  },
  {
    title: "Remote Sensing and Digital Image Analysis",
    org: "ISRO",
    date: "Aug 2024 - Sept 2024",
    link: "https://drive.google.com/file/d/1KSQlGlrSKrqU5dvWSa38mlo_o8lQLXHv/view?usp=sharing"
  }
];

const education = [
  {
    degree: "M.Sc. in Data Science and Artificial Intelligence",
    school: "Himachal Pradesh University, Shimla",
    year: "Completed 2025",
    cgpa: "8.3/10",
    details: [
      "Relevant Coursework: Data Science & AI, Machine Learning & Deep Learning, Data Structures & Algorithms, Probability & Statistics, Cybersecurity"
    ],
    link: "https://drive.google.com/file/d/1cOIctKdeNSeKp2v-phuwjNUKTRzAxO6x/view?usp=sharing"
  },
  {
    degree: "Bachelor of Science – Mathematics, Physics, Chemistry",
    school: "Himachal Pradesh University, Shimla",
    year: "Graduated 2022",
    cgpa: "8.7/10",
    details: [],
    link: "https://drive.google.com/file/d/1yyvxkNLUp_W2F0IcHTMNkL0QLj8BLTzP/view?usp=sharing"
  },
  {
    degree: "Senior Secondary (12th) - Non-Medical",
    school: "HP Board of School Education, Dharamshala",
    year: "2019",
    cgpa: "85%",
    details: [],
    link: "https://drive.google.com/file/d/10X1Y4bgyfqGplZ2XBj4Jn97juID4Jysq/view?usp=sharing"
  },
  {
    degree: "10th",
    school: "HP Board of School Education, Dharamshala",
    year: "2017",
    cgpa: "80.8%",
    details: [],
    link: "https://drive.google.com/file/d/1PsKF9JFziro-WBQM_9yOFBhXGQvNinbw/view?usp=sharing"
  }
];

const projects = [
  {
    title: "Smart Call Analyzer",
    date: "July 2025",
    description: [
      "Developed a Smart Call Analyzer tool to categorize and analyze call data, improving call quality insights and reducing manual review time by 40%.",
      "Implemented advanced data processing and pattern recognition using Python, Pandas, and Scikit-learn for accurate segmentation and trend analysis."
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    link: "https://github.com/chandresh288/smart-ci"
  },
  {
    title: "DBSCAN Clustering for Customer Segmentation",
    date: "Aug 2024",
    description: [
      "Segmented mall customers by applying DBSCAN clustering techniques, resulting in more targeted marketing strategies.",
      "Preprocessed and analyzed datasets using Python libraries such as Pandas and Scikit-learn, improving data readiness and model performance."
    ],
    tags: ["Python", "DBSCAN", "Pandas", "Scikit-learn"],
    link: "https://www.kaggle.com/code/chandreshverma/clustering-by-using-dbscan"
  },
  {
    title: "Email Spam Detection using Machine Learning",
    date: "Jul 2024",
    description: [
      "Built a binary classification model to detect spam emails, achieving accurate filtering and reducing false positives.",
      "Implemented TF-IDF feature extraction, trained multiple ML algorithms, and evaluated performance to select the most effective model."
    ],
    tags: ["Python", "ML", "TF-IDF", "Classification"],
    link: "https://github.com/chandresh288/email-spam-detector"
  },
  {
    title: "Quick Park – Online Parking Booking System (Prototype)",
    date: "Jan 2024",
    description: [
      "Designed and developed an online parking slot booking platform enabling users to reserve spots in real-time, improving parking efficiency and user convenience.",
      "Created a React.js frontend with interactive maps using Leaflet.js, built a FastAPI backend integrated with PostgreSQL for data handling and invoice generation, and used Docker for consistent deployment across environments."
    ],
    tags: ["React.js", "FastAPI", "PostgreSQL", "Docker", "Leaflet.js"],
    link: "https://github.com/chandresh288/quick-park"
  }
];

const experience = [
  {
    company: "A2IT Private Limited",
    title: "Data Science Intern",
    date: "Jan 2025–Jun 2025 | Mohali, Punjab",
    details: [
      "Assisted in data processing and analysis using Python.",
      "Participated in model building and performance evaluation using machine learning algorithms.",
      "Collaborated with team members to clean, preprocess, and visualize data for actionable insights."
    ]
  }
];

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "chandreshverma288@gmail.com",
    href: "mailto:chandreshverma288@gmail.com"
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 78768 47924",
    href: "tel:+917876847924"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chandresh-verma16",
    href: "https://www.linkedin.com/in/chandresh-verma16"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Shimla, Himachal Pradesh, 171005",
    href: "https://maps.google.com/?q=Shimla, Himachal Pradesh, 171005"
  }
];

// Animated Section Wrapper
const MotionBox = motion(Box);

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip label={colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
        size="lg"
        position="fixed"
        top={4}
        right={4}
        zIndex={200}
      />
    </Tooltip>
  );
}

function Hero() {
  return (
    <MotionBox
      as="section"
      textAlign="center"
      py={10}
      bgGradient="linear(to-r, blue.50, green.50)"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Heading as="h1" size="2xl" mb={2}>
        Chandresh Kumari
      </Heading>
      <Text fontSize="xl" color="blue.700" mb={3}>
        Data Science Postgraduate | Machine Learning | Analytics | Problem Solver
      </Text>
      <HStack justify="center" spacing={6} mb={3}>
        {contactLinks.map((c) => (
          <Tooltip key={c.label} label={c.value}>
            <IconButton
              as={Link}
              href={c.href}
              icon={React.createElement(c.icon)}
              aria-label={c.label}
              colorScheme="blue"
              variant="ghost"
              size="lg"
              isExternal
            />
          </Tooltip>
        ))}
      </HStack>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        maxW="2xl"
        mx="auto"
        color="gray.600"
      >
        Curious and driven Data Science postgraduate with a knack for finding stories hidden in data. I enjoy turning complex problems into practical solutions that make a real impact. Looking to join a team where I can apply my skills in machine learning, analytics, and problem-solving while continuing to grow through hands-on challenges and collaborative work.
      </MotionBox>
    </MotionBox>
  );
}

function SkillBar({ name, icon: Icon, level }) {
  const barColor = useColorModeValue("blue.400", "green.300");
  return (
    <Box mb={4}>
      <Flex align="center" mb={1}>
        <Box as={Icon} fontSize="2xl" mr={2} />
        <Text fontWeight="medium" minW={110}>{name}</Text>
        <Spacer />
        <Text fontSize="sm" color="gray.500">{level}%</Text>
      </Flex>
      <Box bg={useColorModeValue("gray.200", "gray.700")} borderRadius="md" h={2} w="100%">
        <MotionBox
          h={2}
          borderRadius="md"
          bg={barColor}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2 }}
        />
      </Box>
    </Box>
  );
}

function Skills() {
  const [show, setShow] = React.useState(false);
  return (
    <MotionBox
      as="section"
      py={8}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <HStack mb={2}>
        <Heading as="h2" size="lg">Technical Skills</Heading>
        <Spacer />
        <IconButton
          icon={show ? <FaChevronUp /> : <FaChevronDown />}
          aria-label="Toggle skills"
          onClick={() => setShow((s) => !s)}
          variant="ghost"
          size="sm"
        />
      </HStack>
      <Collapse in={show} animateOpacity>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {skills.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </SimpleGrid>
        <Box mt={6}>
          <Heading as="h3" size="md" mb={2}>Other Skills</Heading>
          <HStack spacing={4} color="teal.600" fontWeight="medium" flexWrap="wrap">
            <Tag>Strong Problem-solving ability</Tag>
            <Tag>Effective communication</Tag>
            <Tag>Team Player</Tag>
            <Tag>Leadership</Tag>
          </HStack>
        </Box>
      </Collapse>
    </MotionBox>
  );
}

function Certifications() {
  return (
    <MotionBox
      as="section"
      py={8}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <Heading as="h2" size="lg" mb={4}>Certifications</Heading>
      <List spacing={3}>
        {certifications.map((c) => (
          <ListItem key={c.title} display="flex" alignItems="center">
            <ListIcon as={FaStar} color="yellow.400" fontSize="xl" />
            <Box>
              {c.link ? (
                <Link href={c.link} isExternal color="blue.600" fontWeight="semibold">
                  {c.title}
                </Link>
              ) : (
                <Text fontWeight="semibold">{c.title}</Text>
              )}
              <Text fontSize="sm" color="gray.500">
                {c.org} {c.date && <>| {c.date}</>}
              </Text>
            </Box>
          </ListItem>
        ))}
      </List>
    </MotionBox>
  );
}

function Timeline({ items, type }) {
  return (
    <VStack align="stretch" spacing={6} position="relative" pl={4}>
      {items.map((item, idx) => (
        <MotionBox
          key={item.degree || item.company}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          borderLeft="2px solid"
          borderColor={useColorModeValue("blue.200", "green.400")}
          pl={4}
          pb={2}
        >
          {item.link ? (
            <Link href={item.link} isExternal color="blue.600" fontWeight="bold" fontSize="lg">
              {type === "education" ? item.degree : item.title}
            </Link>
          ) : (
            <Text fontWeight="bold" fontSize="lg" color="blue.600">
              {type === "education" ? item.degree : item.title}
            </Text>
          )}
          <Text fontSize="md" color="gray.700">
            {type === "education" ? item.school : item.company}
          </Text>
          <Text fontSize="sm" color="gray.500" mb={1}>
            {item.year || item.date} {item.cgpa && <>| <b>CGPA:</b> {item.cgpa}</>}
          </Text>
          {item.details && item.details.length > 0 && (
            <List fontSize="sm" color="gray.600" pl={2} styleType="disc">
              {item.details.map((d, i) => (
                <ListItem key={i}>{d}</ListItem>
              ))}
            </List>
          )}
        </MotionBox>
      ))}
    </VStack>
  );
}

function Education() {
  return (
    <MotionBox
      as="section"
      py={8}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Heading as="h2" size="lg" mb={4}>Education</Heading>
      <Timeline items={education} type="education" />
    </MotionBox>
  );
}

function Experience() {
  return (
    <MotionBox
      as="section"
      py={8}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <Heading as="h2" size="lg" mb={4}>Experience</Heading>
      <Timeline items={experience} type="experience" />
    </MotionBox>
  );
}

function Projects() {
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <MotionBox
      as="section"
      py={8}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <Heading as="h2" size="lg" mb={4}>Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {projects.map((p, idx) => (
          <MotionBox
            key={p.title}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(16,185,129,0.13)" }}
            transition={{ type: "spring", stiffness: 300 }}
            borderWidth="1px"
            borderRadius="lg"
            p={5}
            bg={useColorModeValue("white", "gray.800")}
            cursor="pointer"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            role="group"
            tabIndex={0}
            aria-expanded={openIdx === idx}
            _focus={{ boxShadow: "outline" }}
          >
            <Flex align="center" justify="space-between">
              {p.link ? (
                <Link href={p.link} isExternal color="blue.800" fontWeight="bold" fontSize="lg">
                  {p.title}
                </Link>
              ) : (
                <Text fontWeight="bold" fontSize="lg" color="blue.800">{p.title}</Text>
              )}
              <Text fontSize="sm" color="gray.500">{p.date}</Text>
            </Flex>
            <Collapse in={openIdx === idx} animateOpacity>
              <List mt={2} spacing={1} fontSize="md" color="gray.700">
                {p.description.map((d, i) => (
                  <ListItem key={i}>{d}</ListItem>
                ))}
              </List>
              <HStack mt={2} spacing={2} flexWrap="wrap">
                {p.tags.map((tag) => (
                  <Tag key={tag} colorScheme="blue" variant="subtle">{tag}</Tag>
                ))}
              </HStack>
            </Collapse>
          </MotionBox>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
}

function FloatingContact() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      position="fixed"
      bottom={8}
      right={8}
      zIndex={100}
      bgGradient="linear(to-r, blue.500 60%, green.400 100%)"
      color="white"
      borderRadius="full"
      w={14}
      h={14}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="lg"
      cursor="pointer"
      whileHover={{ scale: 1.1 }}
      onClick={() => window.open("mailto:chandreshverma288@gmail.com")}
      title="Contact Me"
    >
      <FaEnvelope size={28} />
    </MotionBox>
  );
}

export default function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      {/* <DarkModeToggle /> */}
      <Container maxW="4xl" py={6}>
        <VStack spacing={10} align="stretch">
          <Hero />
          <Divider />
          <Skills />
          <Divider />
          <Certifications />
          <Divider />
          <Education />
          <Divider />
          <Projects />
          <Divider />
          <Experience />
        </VStack>
      </Container>
      <FloatingContact />
      <Box as="footer" textAlign="center" color="gray.500" my={8} fontSize="sm">
        &copy; {new Date().getFullYear()} Chandresh Kumari
      </Box>
    </Box>
  );
}
