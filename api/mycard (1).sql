-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2018 at 02:13 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mycard`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblprofile`
--

CREATE TABLE `tblprofile` (
  `id` int(11) NOT NULL,
  `cid` varchar(50) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `lname` varchar(25) NOT NULL,
  `address` varchar(100) NOT NULL,
  `occupation` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `whatsapp` varchar(20) DEFAULT NULL,
  `skype` varchar(50) DEFAULT NULL,
  `imageurl` varchar(300) DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0I6VDKQ3vmT9y2QFvx7UZ4aTK_HZUbbHyIvmr_sgoa3sIBB6cg',
  `intro` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblprofile`
--

INSERT INTO `tblprofile` (`id`, `cid`, `fname`, `lname`, `address`, `occupation`, `phone`, `email`, `whatsapp`, `skype`, `imageurl`, `intro`) VALUES
(7, '465c10d4bd8997b', 'Joseph', 'Thomas', 'Maliyil Cochin Kerala', 'Software Developer', '123435', 'josephthomaa', '9746123742', 'josephthomas530', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0I6VDKQ3vmT9y2QFvx7UZ4aTK_HZUbbHyIvmr_sgoa3sIBB6cg', 'asdasd');

-- --------------------------------------------------------

--
-- Table structure for table `tbuser`
--

CREATE TABLE `tbuser` (
  `id` int(11) NOT NULL,
  `cid` varchar(25) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `upwd` varchar(50) NOT NULL,
  `uphone` varchar(20) NOT NULL,
  `uemail` varchar(50) NOT NULL,
  `ulink` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbuser`
--

INSERT INTO `tbuser` (`id`, `cid`, `uname`, `upwd`, `uphone`, `uemail`, `ulink`) VALUES
(2, '465c10d4bd8997b', 'josephthomaa', 'password', '1156189150', 'josephthomaa@gmail.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblprofile`
--
ALTER TABLE `tblprofile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbuser`
--
ALTER TABLE `tbuser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblprofile`
--
ALTER TABLE `tblprofile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `tbuser`
--
ALTER TABLE `tbuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
