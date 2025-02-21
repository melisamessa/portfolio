import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaUnity,
  FaGlobeAmericas,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiSpringboot,
  SiTensorflow,
  SiKeras,
  SiReact,
  SiRasa,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { GiLadybug } from "react-icons/gi";
import { BsKanban } from "react-icons/bs";
import { DiScrum } from "react-icons/di";
import { PiFileCSharp, PiFileSqlFill } from "react-icons/pi";
import { CgCPlusPlus } from "react-icons/cg";

export const skills = [
  {
    category: "Lenguajes de Programación",
    items: [
      { id: "Python", name: "Python", icon: FaPython, level: "Intermedio" },
      { id: "Java", name: "Java", icon: FaJava, level: "Intermedio" },
      { id: "Csharp", name: "C#", icon: PiFileCSharp, level: "Intermedio" },
      { id: "Cpp", name: "C++", icon: CgCPlusPlus, level: "Intermedio" },
      { id: "HTML", name: "HTML", icon: FaHtml5, level: "Básico" },
      { id: "CSS", name: "CSS", icon: FaCss3, level: "Básico" },
    ],
  },
  {
    category: "Frameworks y Librerías",
    items: [
      { id: "Unity", name: "Unity", icon: FaUnity, level: null },
      { id: "SP", name: "Spring Boot", icon: SiSpringboot, level: null },
      { id: "React", name: "React", icon: SiReact, level: null },
      { id: "TensorFlow", name: "TensorFlow", icon: SiTensorflow, level: null },
      { id: "Keras", name: "Keras", icon: SiKeras, level: null },
      { id: "Rasa", name: "Rasa", icon: SiRasa, level: null },
      { id: "Webots", name: "Webots", icon: GiLadybug, level: null },
      { id: "NumPy", name: "NumPy", icon: SiNumpy, level: null },
      { id: "Pandas", name: "Pandas", icon: SiPandas, level: null },
    ],
  },
  {
    category: "Base de Datos",
    items: [
      {
        id: "PostgreSQL",
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Básico",
      },
      { id: "SQL", name: "SQL", icon: PiFileSqlFill, level: "Básico" },
    ],
  },
  {
    category: "Herramientas y Metodologías",
    items: [
      { id: "Scrum", name: "Scrum", icon: DiScrum, level: null },
      { id: "Kanban", name: "Kanban", icon: BsKanban, level: null },
      { id: "Git", name: "Git", icon: FaGitAlt, level: null },
      { id: "GitHub", name: "GitHub", icon: FaGithub, level: null },
    ],
  },
  {
    category: "Idiomas",
    items: [
      { id: "ES", name: "Español", icon: FaGlobeAmericas, level: "Nativo" },
      {
        id: "EN",
        name: "Inglés",
        icon: FaGlobeAmericas,
        level: "Intermedio",
      },
    ],
  },
  {
    category: "Habilidades blandas",
    items: [
      {
        id: "TeE",
        name: "Trabajo en equipo",
        icon: null,
        level: null,
      },
      {
        id: "RdP",
        name: "Resolución de problemas",
        icon: null,
        level: null,
      },
      {
        id: "AC",
        name: "Aprendizaje continuo",
        icon: null,
        level: null,
      },
      {
        id: "Adaptabilidad",
        name: "Adaptabilidad",
        icon: null,
        level: null,
      },
      {
        id: "Liderazgo",
        name: "Liderazgo",
        icon: null,
        level: null,
      },
      {
        id: "Responsabilidad",
        name: "Responsabilidad",
        icon: null,
        level: null,
      },
    ],
  },
];
