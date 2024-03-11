import Cover from "./Screens/Cover";
import Login from "./Screens/Login";
import Historic from "./Screens/Historic";
import Remainder from "./Screens/Remainder";
import Announcement from "./Screens/Announcement";
import Report from "./Screens/Report";
import Home from "./Screens/Home";

import Background from "./Components/Background";
import Header from "./Components/Header";
import Search from "./Components/Search";
import RemainderCard from "./Components/RemainderCard";
import NoRemainderCard from "./Components/NoRemainderCard";

import Warning from "./Blocks/Warning";
import Introduction from "./Blocks/Introduction";
import Question from "./Blocks/Question";

import LoginModal from "./Modal/Login";
import RemainderModal from "./Modal/Remainder";

import NormalText from "./AnswerType/NormalText";
import SelectionText from "./AnswerType/SelectionText";
import SelectionDegree from "./AnswerType/SelectionDegree";

import NextBlock from "./Components/NextBlock"

export const screens = {
    // Screens
    Cover,
    Login,
    Historic,
    Remainder,
    Announcement,
    Report,
    Home,
    // Components
    Background,
    Header,
    Search,
    NextBlock,
    RemainderCard,
    NoRemainderCard,
    // Blocks
    Warning,
    Introduction,
    Question,
    // Modal
    LoginModal,
    RemainderModal,
    // Answer Type
    NormalText,
    SelectionDegree,
    SelectionText
};
