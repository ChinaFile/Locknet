+++
title = "Glossary"
weight = 3
toc = false
+++

**Application layer** \- The part of the network stack that conducts high-level data management and translation, such as character encoding, data compression, encryption/decryption, and remote file access. **HTTP** and **HTTPS protocols** function at this layer.

**Border Gateway Protocol (BGP)** \- The set of rules governing how one router at the edge of a network communicates with a router in a neighboring network. This allows the routers to provide and receive information about the status of each others’ networks, such as what paths are available in the neighboring network. This helps them decide what paths they might use to transmit packets.

**Collateral freedom** \- The inverse of “collateral damage,” collateral freedom posits that, if circumvention technologies make use of platforms that a censorship regime is unwilling to block, communications that would otherwise be censored will be able to slip through. This is the theory that underlies **domain fronting**, which relies on large, economically important websites like Amazon and Google to serve as **fronts**.

**Data packet** \- What the transport layer creates when preparing data to be sent from one computer to another. When the transport layer receives data from the application layer, it divides that data into segments called packets, which can then be individually processed and routed throughout the internet.

**Deep packet inspection (DPI)**  \- The process of unpacking an internet packet and reading the content contained at the deepest (application) layer.

**DNS lookup** \- The process by which a user’s computer converts human-friendly domain names into computer-friendly IP addresses. It consists of the computer sending the domain name to a DNS resolver, which searches for and returns the corresponding IP address to the user.

**DNS resolver** \- A server that is the first stop in the DNS lookup process. It receives a domain name from a user and then queries a nameserver to find the corresponding IP address, which it then sends back to the user. DNS resolvers are often run by **internet service providers (ISPs).**

**Domain fronting** \- A censorship circumvention technique that sends internet packets to a false destination (a **front**) while hiding the real destination deeper within the packet structure. A censor would only see the front, usually a large website such as Amazon or Google, and allow the traffic to pass. This method, however, relies on the front websites unpacking the packets, seeing the true destination, and forwarding on the packets to the true destination—which many front websites have stopped doing.

**Domain Name System (DNS)** \- The system that converts a human-friendly domain name (e.g., “catvideos.com”) into a computer-friendly IP address (e.g., “157.240.22.35”). By converting domain names into IP addresses, DNS allows routers throughout the internet to efficiently send information to the correct destination. DNS relies on **DNS resolvers** and **nameservers** to assist with this conversion.

**Encrypted Server Name Identification (ESNI)** \- An encrypted version of the SNI field, allowing servers to return the proper website content to users while still keeping censors from knowing the website’s identity. As Chinese censors do not have an easy way to break the ESNI field’s encryption, they have instead blocked all ESNI traffic.

**Fingerprinting** \- A method for detecting certain types of encrypted internet traffic. In China, fingerprinting is often used to detect internet traffic that is attempting to evade network-level censorship. Because encryption prevents a censor from viewing the content of a packet, fingerprinting techniques allow the censor to instead analyze the visible parts of the packet; if the visible parts of the packet conform to certain specific patterns (“fingerprints”) associated with particular circumvention tools, the censor can block the packet.

**Hop** \- A single step or jump a data packet makes as it travels from one device to the next, such as from one router to another. A data packet may make many hops to travel from its origin to its final destination.

**Hypertext Transfer Protocol (HTTP)** \- A set of instructions for requesting information from a website (or other online resource), as well as sending and receiving that information. As such, it serves as the foundation for internet communication. HTTP functions at the **application layer** of the network stack.

**Hypertext Transfer Protocol Secure (HTTPS)** \- A secure version of HTTP, used by most modern websites in most countries, that determines how data is sent between a user and a website. At the application layer, the information is still formatted as HTTP.  HTTPS simply wraps this HTTP data in a layer of encryption before sending it out over the internet.

**In-path middlebox** \- A middlebox that sits directly on a cable transferring information between two endpoints. All internet traffic therefore also transits the middlebox before reaching its intended destination. An in-path middlebox can opt to block certain pieces of unwanted internet traffic so that they never reach their intended destination (also known as **dropping** traffic).

**International gateway (IXP)** \- The physical point at which data enters or leaves a country. Depending on the volume of a country’s internet traffic and the number of international gateways it has, such gateways can be bottlenecks or chokepoints, since all cross-border data must flow through them.

**Internet backbone** \- A high-speed cable, or set of cables, designed to carry internet traffic across longer distances. A home internet user does not connect directly into an internet backbone; rather, backbones generally run between large hubs of internet traffic, such as between two major ISPs’ networks.

**Internet layer** \- The part of the network stack that manages flows of information across the internet. The internet layer organizes traffic and routing among multiple different nodes within and between networks, ensuring that packets reach the correct destination.

**Internet Protocol (IP)** \- The set of rules, developed over time and with the input of many different international organizations and individuals, that guides how packets of data travel across networks and that allows the many different networks that make up the internet to be interoperable. Internet Protocol Version 4 (IPv4) and Internet Protocol Version 6 (IPv6) are both currently in use on the internet.

**Internet service provider (ISP)** \- An organization that provides users access to the internet, in addition to other related services, such as maintaining **DNS resolvers**. An ISP may be privately or publicly owned. In many countries, including China and the U.S., ISPs are required to share certain information with law enforcement agencies.

**IP address** \- A series of characters that identifies a computer or server using the IP system to communicate over the internet. Internet Protocol Version 4 (IPv4) addresses are composed of a set of four numbers, each with one to three digits, separated by periods (for example, *104.18.204.43*). Internet Protocol Version 6 (IPv6) addresses are longer and can also include letters (such as *1050:0:0:0:5:600:300c:326b*).

**IP blocking** \- When a network-level censorship system disrupts a connection based on either the destination or origin IP address written to data packet headers.

**Link layer** \- The part of the network stack that transmits data between two nodes connected by a physical layer. For example, the link layer transmits data between two routers, or between a home computer and a home modem. 

**Middlebox** \- A machine that is positioned between two endpoints of online communications, often in order to read the contents of those communications as they pass back and forth.

**Nameserver** \- A server that stores and organizes DNS records, including domain names and IP addresses. As part of the **DNS lookup** process, a **DNS resolver** will query a nameserver, asking if it contains the record for a particular domain name. If the nameserver does contain that record, it will return the associated IP address to the DNS resolver. A nameserver that contains the record is referred to as the **authoritative nameserver.** 

**Network-level censorship** \- Censorship conducted by equipment placed within an internet network, aimed at all traffic that transits that network. This may include machines positioned throughout an ISP’s network, or machines positioned at international gateways that are designed to handle all internet traffic passing through those gateways.

**Network stack** \- An abstraction that characterizes the relationship between various elements of the online communication process, with one element stacked on top of another in **layers**. Though there are several different ways of envisioning the stack, all versions describe each layer as having a specific set of dedicated tasks it performs, while having no insight into what happens at the other layers of the stack.

**Packet switching** \- The process whereby data is broken down into small chunks called **data packets,** which are then independently routed via the most efficient pathway to their destination, where the packets are then reassembled.

**Path-adjacent middlebox** \- A **middlebox** that monitors, but does not sit directly on, a cable transferring information between two endpoints. (More commonly referred to as an on-path middlebox by computer scientists.) It monitors internet traffic by reading copies of that traffic. A path-adjacent middlebox cannot directly block internet traffic; instead, it must issue orders to one or both endpoints of the connection in an attempt to have them break the connection.

**Physical layer** \- The part of the network stack that converts digital data into electrical, radio, or optical signals, which it then transmits and receives over a physical medium such as a cable.

**Proxy server** \- Machines that are set up to accept and forward on traffic that is ultimately meant for another server. Also known simply as “**proxies**,” proxy servers obscure a user’s true destination, with a censor only able to see the proxy server’s IP address and not the IP address of the true destination. In common parlance, the terms “proxy” and “VPN” are used interchangeably to describe a technology that helps evade censorship.

**Quick UDP Internet Connections (QUIC)** \- A standard for delivering data online that applies the security features of **TLS** to the **UDP** packet format. QUIC aims to speed up initial connection times while providing encryption by default.

**Residual censorship** \- The period during which, after censors have forcibly disrupted an internet connection between two endpoints, all further connections between those two endpoints are blocked. Chinese authorities enforce residual censorship to punish users who attempt to view banned content, or simply to make users think that the website in question is unstable and not worth visiting. Residual censorship can last anywhere from a few seconds to multiple hours. 

**Router \-** A router is a computer and networking device that guides and directs data, in small chunks called **data** **packets**, between computer networks. In addition to other functions, routers ensure packets are sent to their correct destination, or IP address, via the best available route. 

**Server** \- A computer that “serves up” requested content. Most online information is stored (or hosted) on a server. When a user visits a website, it is a server that actually sends back the website content to the user. Servers exist for many different purposes. Hillary Clinton [famously](https://www.bbc.com/news/world-us-canada-31806907) had one just for her email. Major social media companies have many of them in order to provide content to users quickly.

**Server Name Identification (SNI)** \- A field in the HTTPS protocol containing the domain name of the website the user hopes to visit. Because so many modern websites do not have their own dedicated IP address, the SNI field specifies which of the domain names hosted at a given IP address the user is actually seeking. The SNI field is unencrypted, meaning it can easily be read by censors.

**Service-level censorship** \- Censorship conducted by a company or entity monitoring the censorship on its own platform or service. This can be accomplished through both manual and automated means, but it only targets the content available on the platform or service in question.

**Stateful / stateless** \- A description of a **middlebox** that indicates whether or not the middlebox can track the status of any given internet connection over time. A stateful middlebox, upon analyzing an internet packet, will recognize it as belonging to a particular ongoing internet connection and maintain a short-term memory cache logging all activity on that connection. A stateless middlebox, on the other hand, can only analyze each individual internet packet as it comes, without any short-term memory cache or context. 

**TCP reset** \- A type of packet, and also the name of a mechanism frequently deployed by the Chinese censorship system to forcibly disrupt specific internet connections. After detecting undesirable content, a path-adjacent **middlebox** issues one or more TCP reset packets to each end of the connection. These packets instruct each endpoint of the connection to reset itself, effectively terminating the connection. This mechanism does not technically *block* content that has already been sent; instead, it tricks the endpoints into breaking the connection so no more content is sent or received. Also known as TCP RST.

**TCP three-way handshake** \- The mechanism **TCP** uses to establish a connection between two endpoints. The handshake ensures that each side of the connection is available and ready to transmit and receive data. The handshake works by both sides exchanging three different types of packets: first, a synchronization, or SYN, packet; second, a synchronize-acknowledge, or SYN-ACK, packet; and third, an acknowledgement, or ACK, packet.

**Transmission Control Protocol (TCP)** \- A standard for delivering data online, specifying how to break data up into packets in preparation to be transmitted over the internet. Because TCP ensures that each side of a connection is ready before transmitting data, and because it allows for data reassembly at the destination, TCP is most often used by applications prioritizing reliability and completeness, such as web browsing, email, and file transfers.

**Transport layer** \- The part of the network stack that segments data into packets. Depending on the protocol in use, the transport layer may also establish a connection with another machine prior to sending packets, or reassemble received packets into the correct order.

**Transport Layer Security (TLS)** \- A protocol used by HTTPS to conduct a second three-way handshake between two endpoints. During this handshake, the two sides of the connection exchange information that allows them to agree on an encryption key, which they then use to encrypt all subsequent traffic between them.

**Universal Datagram Protocol (UDP)** \- A standard for delivering data online, specifying how to break data up into packets in preparation to be transmitted over the internet. Because UDP does not establish a firm connection before sending data, and does not require reassembly of data once it reaches its destination, UDP is most often used by applications that prioritize speed, such as video streaming and **DNS lookups**.

**Virtual private network (VPN)** \-  A computer application that makes use of both encryption and a **proxy server** to keep censors from seeing the true destination of a user’s internet traffic. In common parlance, the terms “VPN” and “proxy” are used interchangeably to describe a technology that helps evade censorship.