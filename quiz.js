const questions = [{
    "question": "In non-persistent CSMA a station finding the channel busy?",
    "options": [
      "immediately sends the frame on the secondary channel",
      "listens the channel until it is free again, and then it will transmit the",
      "will wait for a random time interval, and then it will transmit the frame on the Channel",
      "will listen the channel again after a random time interval"
    ],
    "answer": "will wait for a random time interval, and then it will transmit the frame on the Channel",
    "explanation": "In non-persistent CSMA, a station waits for a random time interval after detecting the channel is busy before attempting to transmit again. This random backoff helps reduce the likelihood of collisions occurring when multiple stations attempt to transmit simultaneously, thereby improving network efficiency"
  },
  {
    "question": "Which of the following technologies is not used for access networks?",
    "options": ["VDSL", "SONET", "PON", "LTE"],
    "answer": "SONET",
    "explanation": "SONET (Synchronous Optical Networking) is typically used for long-distance telecommunications and backbone networks, rather than access networks"
  },
  {
    "question": "In a WiFi network the usage of RTS/CTS frames?",
    "options": [
      "enables retransmission after a collision has occurred",
      "signals the occurrence of a collision to other stations",
      "diminishes the probability of collisions with the transmissions of other stations",
      "eliminates collisions with the transmissions of other stations"
    ],
    "answer": "diminishes the probability of collisions with the transmissions of other stations",
    "explanation": "The Request-to-Send (RTS) and Clear-to-Send (CTS) frames are used in Wi-Fi networks to implement the Distributed Coordination Function (DCF) of the IEEE 802.11 standard. They are part of the mechanism to reduce the probability of collisions by reserving the medium before transmission, hence decreasing the chance of multiple stations transmitting simultaneously and causing collisions"
  },
  {
    "question": "Which of these statements about UDP is true?",
    "options": [
      "The receiver is able to guarantee flow control by reducing the transmission window",
      "The receiver automatically requests the retransmission of the data in case Of an incorrect checksum",
      "The receiver is able to verify the integrity of the received data using the checksum",
      "The receiver reorders the received segments before forwarding them to the process listening on the socket"
    ],
    "answer": "The receiver is able to verify the integrity of the received data using the checksum",
    "explanation": "UDP (User Datagram Protocol) includes a checksum mechanism that allows the receiver to verify the integrity of the received data. The checksum is computed by both the sender and the receiver, and if the received data is corrupted during transmission, the checksum will not match, indicating potential data corruption. This mechanism helps ensure data integrity in UDP communication"
  },
  {
    "question": "Bluetooth is a technology?",
    "options": [
      "based on CSMA/CD in the IMS band for short-range radio communication, used for the identification of passive devices",
      "based on frequency hopping spread spectrum in the IMS band for long-range broadband radio communication between phones",
      "based on CSMA in the IMS band for short-range radio communication between devices organized by a coordinator node in generic meshed topologies",
      "based on frequency hopping Spread spectrum in the IMS band tor short-range radio communication between devices organized by a master node in a star topology"
    ],
    "answer": "based on frequency hopping Spread spectrum in the IMS band for short-range radio communication between devices organized by a master node in a star topology",
    "explanation": "Bluetooth technology utilizes frequency hopping spread spectrum in the Industrial, Scientific, and Medical (IMS) band for short-range radio communication between devices. In Bluetooth networks, devices are often organized in a star topology, where one master node coordinates communication with multiple slave nodes. The frequency hopping mechanism helps mitigate interference and provides robust communication in various environments"
  },
  {
    "question": "Consider a datagram forwarded from a home network to the Internet via a common NAT-capable router. Which of these statements is certainly false?",
    "options": [
      "The destination IP address fields in the headers of datagrams entering the NAT and leaving the NAT differ",
      "TTL fields in the headers of incoming and outgoing datagrams differ",
      "Source port fields Of TCP segments contained in incoming and outgoing datagrams differ",
      "Source IP address fields in the headers of incoming and outgoing datagrams differ"
    ],
    "answer": "TTL fields in the headers of incoming and outgoing datagrams differ",
    "explanation": "The Time-to-Live (TTL) field in the IP header is typically not modified by NAT (Network Address Translation), NAT changes src or dest IP or both"
  },
  {
    "question": "A UTP (Unshielded Twisted Pair) cable and an optical fiber?",
    "options": [
      "can be both used in transoceanic links",
      "are used in passive bus topologies",
      "can be both used in access networks",
      "achieve comparable bit rates"
    ],
    "answer": "can be both used in access networks",
    "explanation": "UTP cables are cost-effective and easy to install, making them suitable for traditional LAN setups, while optical fibers are preferred for high-speed and long-distance connections,Coaxial cables are suitable for passive bus topologies because they provide a reliable medium for transmitting data signals over relatively long distances without requiring active components like repeaters or switches"
  },
  {
    "question": "A frame received by the Ethernet network interface card of a switch is processed to determine its forwarding?",
    "options": [
      "always, regardless of the MAC destination address",
      "only it the MAC destination address is the broadcast address",
      "only if the unicast MAC destination address is that of the switch",
      "only if the MAC destination address is a multicast address and the switch belongs to the multicast group"
    ],
    "answer": "always, regardless of the MAC destination address",
    "explanation": "It processes the frame first thing, then checks the address and continues further processing or checks"
  },
  {
    "question": "What is the playout buffer used for?",
    "options": [
      "To manage the retransmission window for multimedia contents",
      "To compensate the variability of the network delay in the streaming transmission of multimedia content",
      "To access more quickly to the multimedia contents thanks to the local caching",
      "To avoid congestion problems in the network"
    ],
    "answer": "To compensate the variability of the network delay in the streaming transmission of multimedia content",
    "explanation": "the playout buffer is used in multimedia streaming to compensate for variations in network delay (also known as jitter) by temporarily storing received data. This buffer helps ensure smooth playback of multimedia content by providing a consistent flow of data to the playback mechanism, even if packets arrive at irregular intervals due to network congestion or other factors"
  },
  {
    "question": "The greater complexity of the Go-Back-N protocol compared to the Stop and Wait protocol is due to?",
    "options": [
      "the timeout management at the receiver",
      "the greater complexity of the receiver",
      "the greater complexity of the transmitter",
      "the greater complexity of both the transmitter and the receiver"
    ],
    "answer": "the greater complexity of the transmitter",
    "explanation": "The Go-Back-N protocol is more complex than the Stop and Wait protocol primarily because of the greater complexity involved in managing the transmitter. In Go-Back-N, the transmitter has to maintain a larger sliding window and handle multiple outstanding packets, which requires additional logic and resources compared to the Stop and Wait protocol, where only one packet is transmitted at a time"
  },
  {
    "question": "One advantage when using the piggybacking technique in sliding window protocols is?",
    "options": [
      "increasing the probability that an ACK is received by the transmitter",
      "confirming using a single acknowledgment the reception of multiple data units",
      "transmitting data units also outside the transmission window",
      "reducing of the percentage of control information transferred in the network"
    ],
    "answer": "reducing of the percentage of control information transferred in the network",
    "explanation": "One advantage when using the piggybacking technique in sliding window protocols is reducing the percentage of control information transferred in the network. This is because acknowledgments (ACKs) can be piggybacked onto data frames, minimizing the need for separate acknowledgment messages"
  },
  {
    "question": "A host wants to send a file to 2200 bytes using PDUs of 900 bytes with a 100-byte PCI on a 4 Mbit/s link. How long will last the transmission of the last PDU sent?",
    "options": ["1", "1,4 ms", "5", "1,8 ms"],
    "answer": "1,8 ms",
    "explanation": "The transmission time of the last PDU sent by a host wanting to send a file of 2200 bytes usingPDUs of 900 bytes with a 100-byte PCI on a 4 Mbit/s link would be 1.8 ms. This calculation accounts for the time it takes to transmit the data over the given link speed"
},
    {
      "question": "What advantages have we got moving from classful to classless IP addressing method?",
      "options": [
        "The possibility to use IP multicast addresses",
        "A considerable increase in the total number of theoretically available IP addresses",
        "An increase in the speed of data transmission over the Internet",
        "A rationalization and Optimization of address allocation to IP networks"
      ],
      "answer": "A rationalization and Optimization of address allocation to IP networks",
      "explanation": "Moving from classful to classless IP addressing method brings the advantage of rationalization and optimization of address allocation to IP networks. Classless addressing allows for more efficient use of IP address space and enables hierarchical addressing, leading to better address allocation strategies"
    },
    {
      "question": "The inclusion of a single error parity bit in a frame guarantees that the receiver can?",
      "options": [
        "detect and correct one single flipped bit",
        "detect an Odd amount of flipped bits",
        "detect any amount of flipped bits",
        "detect an even amount of flipped bits"
      ],
      "answer": "detect an Odd amount of flipped bits",
      "explanation": "The inclusion of a single error parity bit in a frame guarantees that the receiver can detect an odd amount of flipped bits. This means that if an odd number of bits are flipped during transmission, the receiver can detect the error."
    },
    {
      "question": "Despite being a technology developed at the end of the past century, GSM is still used because?",
      "options": [
        "provides a more efficient data transmission than LTE and 5G",
        "it is the only cellular network that can carry audio signals",
        "provides a better audio quality than LTE and 5G",
        "it carries voice signals and thus Saves bandwidth resources that Can be used for data transmission"
      ],
      "answer": "it carries voice signals and thus Saves bandwidth resources that Can be used for data transmission",
      "explanation": "Despite being a technology developed at the end of the past century, GSM is still used because it carries voice signals and thus saves bandwidth resources that can be used for data transmission. GSM is optimized for voice communication, and its efficient use of bandwidth for voice calls makes it still relevant in modern telecommunications"
    },
    {
      "question": "Which of these statements about Web cookies is false?",
      "options": [
        "The cookie is created by the HTTP server when a browser makes access for the first time",
        "The browser creates a different cookie each time it accesses the same HTTP server",
        "A browser that already has a cookie includes it in subsequent requests to its HTTP server",
        "The cookie is stored by the browser in the file system of the client host"
      ],
      "answer": "The browser creates a different cookie each time it accesses the same HTTP server",
      "explanation": "The false statement about Web cookies is that the browser creates a different cookie each time it accesses the same HTTP server. Cookies are created and managed by the server, not the browser. The server sends cookies to the browser, which stores them and includes them in subsequent requests to the server"
    },
    {
      "question": "What are the source and destination port fields in TCP and UDP used for?",
      "options": [
        "To indicate the physical interfaces used by Ethernet to transmit the frames. To manage resource allocation on routers on the source-to-destination path",
        "To indicate the network interfaces used by IP to forward the packets",
        "To implement multiplexing/demultiplexing mechanism for processes on hosts"
      ],
      "answer": "To implement multiplexing/demultiplexing mechanism for processes on hosts",
      "explanation": "In TCP and UDP, the source and destination port fields are used to uniquely identify the processes (or applications) running on the sending and receiving hosts. This allows multiple network services or applications to share the same IP address and communicate concurrently"
    },
        {
          "question": "In the CSMA and CSMA/CD protocols, the concept of \"persistence\" refers to?",
          "options": [
            "the way in which the transmission is attempted, if the sensing of the channel indicates that it is busy",
            "the time during which two transmissions are overlapped on the channel, condition necessary for the collision to be detected",
            "the way in which the retransmission is attempted, if a collision happened",
            "the computation of the time for which a station is allowed to occupy the channel"
          ],
          "answer": "the way in which the transmission is attempted, if the sensing of the channel indicates that it is busy",
          "explanation": "Persistence in CSMA (Carrier Sense Multiple Access) and CSMA/CD (Carrier Sense Multiple Access with Collision Detection) refers to the strategy used by a station to decide when to attempt transmission if the channel is sensed as busy. It determines how the station waits before attempting to send data when the channel is busy."
        },
        {
          "question": "Which of these statements about DNS is false?",
          "options": [
            "A single centralized server is in charge of managing all existing top-level domains.",
            "The root DNS servers are limited in number and their addresses are known.",
            "DNS allows to resolve a name in an IP address",
            "Every domain must have an authoritative DNS server"
          ],
          "answer": "A single centralized server is in charge of managing all existing top-level domains.",
          "explanation": "DNS (Domain Name System) does not rely on a single centralized server to manage all existing top-level domains. Instead, DNS operates as a distributed system, with multiple servers responsible for different parts of the DNS hierarchy, including top-level domains."
        },
        {
          "question": "How many hosts can be managed in a network with netmask 255.255.255.128?",
          "options": ["64", "255", "254", "126"],
          "answer": "126",
          "explanation": "With a subnet mask of 255.255.255.128 (or /25 in CIDR notation), the network can accommodate 126 usable host addresses. This subnet mask leaves 7 bits for host addresses, providing 2^7 - 2 = 126 usable host addresses after subtracting the network and broadcast addresses."
        },
        {
          "question": "There is at least a tree topology with 5 nodes and 4 channels in which, if a channel is added between two nodes not already directly connected, the topology:",
          "options": [
            "remains a tree topology",
            "becomes a fully meshed topology",
            "becomes a ring topology.",
            "becomes a star topology"
          ],
          "answer": "becomes a ring topology",
          "explanation": "Adding a channel between two nodes not already directly connected in a tree topology with 5 nodes and 4 channels results in a topology where all nodes are interconnected, forming a ring"
        },
        {
          "question": "Which mechanism does a router with Network Address Translation exploit to associate internal network addresses and external ones?",
          "options": [
            "The internal and external IP addresses are used directly, without performing any specific action on them",
            "A combination of IP addresses and TCP/UDP ports",
            "The RTP protocol is exploited",
            "The congestion protocol is used for the association"
          ],
          "answer": "A combination of IP addresses and TCP/UDP ports",
          "explanation": "Network Address Translation (NAT) maps internal private IP addresses to external public IP addresses along with the associated TCP/UDP port numbers. This combination allows NAT to uniquely identify each internal connection and associate it with an external connection, enabling communication between internal hosts and external destinations"
        },
        {
          "question": "The minimum packet size in the CSMA/CD protocol of the Ethernet network",
          "options": [
            "is preferred to maximize performance in terms of throughput",
            "in no way depends on the maximum allowed size (in meters) of the network",
            "is needed to ensure the collision detection",
            "is needed to ensure avoiding multiple consecutive collisions on the same packet"
          ],
          "answer": "is needed to ensure the collision detection",
          "explanation": "A minimum packet size is required in the CSMA/CD protocol to ensure that the transmitting station can detect collisions reliably. This minimum size ensures that the transmission lasts long enough for the transmitting station to detect any collisions by monitoring the channel during transmission"
        },
        {
          "question": "The DHCP discover message is sent via UDP using as IP destination address:",
          "options": [
            "The loopback address 127.0.0.1",
            "The IP address of the DHCP server on the local network",
            "Limited broadcast IP address 255.255.255.255.",
            "The IP address of the local DNS server"
          ],
          "answer": "Limited broadcast IP address 255.255.255.255.",
          "explanation": "The DHCP discover message is sent using the limited broadcast IP address 255.255.255.255. This address ensures that the message is broadcasted to all devices on the local network, allowing DHCP servers to receive and respond to the request"
        },
        {
          "question": "Consider the line coding schemes 4B5B and 8B10B:",
          "options": [
            "both schemes require more bandwidth than polar coding schemes",
            "the 8B10B requires more bandwidth than the 4B5B scheme",
            "the 4B5B scheme requires more bandwidth than the 8B10B scheme",
            "both schemes require the same bandwidth"
          ],
          "answer": "both schemes require the same bandwidth",
          "explanation": "Both 4B5B and 8B10B line coding schemes are designed to ensure a balance between spectral efficiency and error detection capabilities. While they differ in the number of bits used to encode data, they ultimately require the same bandwidth for transmission"
        }, {
            "question": "A transmitter sends 10 PDUs using Selective Repeat with transmission window and receiving window sizes equal to 5 PDUs, starting the numeration from 1. After transmitting PDUs 1-7 (PDU 7 included), the transmitter receives ACK 5 (cumulative semantics). What can be assumed about PDU 6?",
            "options": [
              "we cannot yet know whether it has already been received or not",
              "it must be retransmitted because it has not been stored in the receiver buffer",
              "it must not be retransmitted because it has surely been stored in the receiver buffer",
              "for sure, it has not yet been received"
            ],
            "answer": "we cannot yet know whether it has already been received or not",
            "explanation": "Since ACK 5 is received with cumulative semantics, it confirms successful receipt of PDUs up to 5. Without explicit acknowledgment of PDU 6, its status (received or not received) cannot be determined based solely on the information provided."
          },
          {
            "question": "The flow control in the TCP protocol",
            "options": [
              "works only in some cases",
              "is based on an autonomous decision at the sender on the basis of missing segments due to congestion",
              "is based on some information included into the segments sent from the receiver to the sender",
              "is obtained by means of the error control on the checksum field"
            ],
            "answer": "is based on some information included into the segments sent from the receiver to the sender",
            "explanation": "TCP flow control is achieved through a mechanism where the receiver informs the sender about its current buffer space availability. This information is included in the TCP segments sent from the receiver to the sender, allowing the sender to adjust its transmission rate accordingly to avoid overwhelming the receiver's buffer"
          },
          {
            "question": "Which of these statements about DNS resource records is true:",
            "options": [
              "The type \"CNAME\" allows you to find the alias given the canonical hostname",
              "The type \"A\" allows you to find the hostname given the IP address",
              "The type \"A\" allows you to find the IP address given the hostname",
              "The type \"CNAME\" allows you to find the mail server given the domain"
            ],
            "answer": "The type \"A\" allows you to find the IP address given the hostname",
            "explanation": "The \"A\" DNS resource record maps a hostname to its corresponding IPv4 address. This record type is commonly used for translating domain names to IP addresses in DNS resolution."
          },
          {
            "question": "The congestion window at the beginning of a TCP connection",
            "options": [
              "has a size negotiated with the receiver and equal to the maximum value of the receive window",
              "has a size negotiated with the receiver and equal to half of the value of the receive window",
              "has a size randomly selected during the connection setup",
              "has a size equal to one maximum segment size (MSS)"
            ],
            "answer": "has a size equal to one maximum segment size (MSS)",
            "explanation": "At the beginning of a TCP connection, the congestion window typically starts with a conservative size equal to one maximum segment size (MSS). This helps prevent overwhelming the network with too much data before the connection characteristics are fully understood."
          },
          {
            "question": "Which of these statements about DNS is true?",
            "options": [
              "Provides that all queries are always sent from a root server, regardless of the use of local catching solutions",
              "It is based on a single centralized server",
              "It uses the protocol UDP for the resolutions of names in IP addresses",
              "It is based on a network of servers that are all equivalent and at the same hierarchy level."
            ],
            "answer": "It uses the protocol UDP for the resolutions of names in IP addresses",
            "explanation": "DNS (Domain Name System) primarily uses UDP (User Datagram Protocol) for resolving domain names to IP addresses. UDP is preferred due to its lightweight nature and suitability for quick, simple queries."
          },
          {
            "question": "A switching node starts receiving a packet at time t = 5 ms and ends it at t = 15 ms. Assuming that there are no other packets in the queue and that the processing time is negligible, its forwarding on an output channel having one third of the speed of the input is completed at time:",
            "options": [
              "it depends on the propagation time toward the destination",
              "t=45ms",
              "t = 60 ms",
              "t=30ms"
            ],
            "answer": "t=45ms",
            "explanation": "Since the output channel speed is one third of the input speed, it will take three times longer to forward the packet completely. Therefore, the forwarding on the output channel will be completed at t = 15 ms (when the packet ends) + 30 ms (three times longer) = 45 ms."
          },
          {
            "question": "In a scenario where wireless stations can always sense each others' transmissions, which of the following claims about the comparison between Slotted-Aloha and CSMA is true?",
            "options": [
              "In Slotted-Aloha, transmission must be preceded by a channel reservation slot whereas in CSMA transmission can start anytime",
              "Differently from Slotted-Aloha, in CSMA the transmission of one station never collides with the transmission of other stations if Collision detection is adopted",
              "A collision may happen using either Slotted-Aloha or CSMA, though with different probabilities, and cannot be avoided",
              "Differently from CSMA, a station that transmits using Slotted-Aloha needs to receive an acknowledgment for its transmission"
            ],
            "answer": "A collision may happen using either Slotted-Aloha or CSMA, though with different probabilities, and cannot be avoided",
            "explanation": "Even with perfect carrier sensing, collisions can still occur in both Slotted-Aloha and CSMA due to propagation delays. In Slotted-Aloha, collisions can happen if multiple stations transmit in the same slot. In CSMA, collisions can occur if two stations are far apart and their signals reach each other after they have started transmitting."
          },
          {
            "question": "By adding a bidirectional channel between two nodes in a tree topology,",
            "options": [
              "the resulting topology always becomes a ring topology",
              "the resulting topology includes a cycle",
              "depending on the selected nodes, the resulting topology can be a star topology",
              "the resulting topology is still a tree topology"
            ],
            "answer": "the resulting topology includes a cycle",
            "explanation": "Adding a bidirectional channel between two nodes in a tree topology introduces a cycle, altering the structure. This is because a bidirectional link between two nodes forms a loop, violating the tree's acyclic nature."
          },
            {
              "question": "Which of the following statements about NAT is true:",
              "options": [
                "NAT uses an IP address/port pair to create associations between internal hosts and destinations on the Internet",
                "NAT assigns IP addresses dynamically to the hosts of the internal network that request it DHCP",
                "It is always possible to contact hosts on the internal network from the Internet, without any special additional solutions",
                "Port forwarding is necessary to allow communication from internal network hosts to the Internet not necessary"
              ],
              "answer": "NAT uses an IP address/port pair to create associations between internal hosts and destinations on the Internet",
              "explanation": "NAT uses an IP address/port pair to create associations between internal hosts and destinations on the Internet. This process allows multiple internal hosts to share a single external IP address, facilitating communication with external destinations while maintaining privacy and security for the internal network."
            },
            {
              "question": "The class C IPv4 addresses distinguish:",
              "options": [
                "(a few) networks with a large number of hosts",
                "multicast communications",
                "broadcast communications",
                "(a lot of) networks with a small number of hosts"
              ],
              "answer": "(a lot of) networks with a small number of hosts",
              "explanation": "class C IPv4 addresses distinguish a lot of networks with a small number of hosts. Class C addresses allocate a smaller portion of the address space for network identification, allowing for a larger number of networks with fewer hosts per network compared to other address classes"
            },
            {
              "question": "The port numbers (port) for multiplexing/demultiplexing operations:",
              "options": [
                "Are present in the header of the IP protocol.",
                "Are present only in the header of the TCP protocol.",
                "Are present in the headers of the UDP and TCP protocols.",
                "Are present only in the header of the UDP protocol."
              ],
              "answer": "Are present in the headers of the UDP and TCP protocols.",
              "explanation": "This is because both UDP (User Datagram Protocol) and TCP (Transmission Control Protocol) utilize port numbers in their headers for multiplexing and demultiplexing operations. Port numbers help identify different communication endpoints on a host device, like src and dest"
            },
            {
              "question": "The Address Resolution Protocol (ARP) allows to:",
              "options": [
                "Obtain an unknown IP address of a host given a MAC address.",
                "Send error messages among routers.",
                "Obtain an unknown IP address of a host given a domain name.",
                "Obtain an unknown MAC address of a host given an IP address."
              ],
              "answer": "Obtain an unknown MAC address of a host given an IP address.",
              "explanation": "Address Resolution Protocol (ARP) is used to resolve IP addresses to MAC addresses on a local network. When a device wants to communicate with another device on the same network, it uses ARP to discover the MAC address associated with the IP address of the destination device."
            },
            {
              "question": "The transport layer in the Internet:",
              "options": [
                "Always provides a reliable data transfer.",
                "Provides a reliable data transfer when UDP is used.",
                "Only provides an unreliable data transfer.",
                "Provides a reliable data transfer when TCP is used."
              ],
              "answer": "Provides a reliable data transfer when TCP is used.",
              "explanation": "The transport layer in the Internet provides reliable data transfer when Transmission Control Protocol (TCP) is used. TCP ensures reliable and ordered delivery of data by managing acknowledgments, retransmissions, and flow control."
            },
            {
              "question": "In a Selective Repeat protocol with a receiver window equal to 2 PDUs, initially positioned on sequence numbers 0 and 1, the following reception of PDUs in indicated order does not cause a PDU discard:",
              "options": [
                "2,0,1,3.",
                "0,2,3,1.",
                "0,3,1,2.",
                "1,0,3,2."
              ],
              "answer": "1,0,3,2.",
              "explanation": "In selective repeat it’s like sliding window mechanism, 2 PDUs mean it can receive 0 and 1, they fall in the first window of 2 PDU, but not 3 and 0, it’s out of window."
            },
            {
              "question": "Bluetooth is a technology:",
              "options": [
                "Based on frequency hopping, spread spectrum in the IMS band for short-range radio communication between devices organized by a master node in a star topology.",
                "Based on CSMA/CD in the IMS band for short-range radio communication, used for the identification of passive devices.",
                "Based on CSMA/CA in the IMS band for short-range radio communication between devices organized by a coordinator node in generic meshed topologies.",
                "Based on frequency hopping spread spectrum in the IMS band for long-range broadband radio communication between phones."
              ],
              "answer": "Based on frequency hopping, spread spectrum in the IMS band for short-range radio communication between devices organized by a master node in a star topology.",
              "explanation": "Bluetooth technology utilizes frequency hopping spread spectrum in the Industrial, Scientific, and Medical (IMS) band for short-range radio communication between devices. In Bluetooth networks, devices are often organized in a star topology, where one master node coordinates communication with multiple slave nodes. The frequency hopping mechanism helps mitigate interference and provides robust communication in various environments"
            },
            {
              "question": "Only considering the standard features of an IP router (i.e., excluding firewall, NAT, etc.), which of the following claims is true?",
              "options": [
                "An IP router uses ICMP messages to evaluate the path to reach a host belonging to the Internet network.",
                "An IP router modifies at least one IP address in the packets it has to transmit.",
                "An IP router modifies at least one MAC address of the packets containing IP packets, but not the IP addresses.",
                "An IP router uses the ARP protocol to learn the IP address of the router to insert."
              ],
              "answer": "An IP router modifies at least one MAC address of the packets containing IP packets, but not the IP addresses.",
              "explanation": "ARP used to find MAC given IP address, IP address of packet doesn’t change nor MAC, but the frame’s MAC address changes"
            },
            {
              "question": "Given a topology (nodes, channels, and associated costs), the optimal path between a source and a destination?",
              "options": [
                "a changes according to the node running the link state algorithm",
                "b is the same whether you use a link state algorithm or use a distance vector algorithm.c never changes even if the cost of the channels changes",
                "d never changes even if a channel becomes unavailable"
              ],
              "answer": "b is the same whether you use a link state algorithm or use a distance vector algorithm.c never changes even if the cost of the channels changes",
              "explanation": "Both link state and distance vector routing algorithms aim to find the optimal path between a source and a destination. While they use different methods to achieve this goal (link state algorithms consider the entire network topology, whereas distance vector algorithms rely on iterative updates between neighboring routers), the result—the optimal path—is independent of the algorithm used. Therefore, the optimal path remains the same regardless of whether you use a link state or distance vector algorithm."
            },
  {
    "question": "Given a topology (nodes, channels, and associated costs), the optimal path between a source and a destination?",
    "options": [
      "a) changes according to the node running the link state algorithm",
      "b) is the same whether you use a link state algorithm or use a distance vector algorithm",
      "c) never changes even if the cost of the channels changes",
      "d) never changes even if a channel becomes unavailable"
    ],
    "answer": "a) changes according to the node running the link state algorithm",
    "explanation": "The optimal path can change based on the algorithm used to find it, with link state algorithms considering the entire network topology and recalculating the path when network changes occur."
  },
  {
    "question": "The term 'roaming' in a cellular network indicates:",
    "options": [
      "a) the overlap of multiple cells in a given area of the territory",
      "b) the speed by which the terminal moves from cell to cell",
      "c) the persistence of the connection even when the terminal moves into an adjacent cell",
      "d) the ability to call a terminal regardless of the cell in which it is"
    ],
    "answer": "c) the persistence of the connection even when the terminal moves into an adjacent cell",
    "explanation": "Roaming ensures the persistence of the connection as the terminal moves between cells, allowing continuous communication services without interruption."
  },
  {
    "question": "A host must send a file of 3000 bytes using PDU composed of a 700-byte SDU and a 100-byte PCI over a 1 Mb/s channel. What is the transmission time of the last PDU sent by the host?",
    "options": [
      "a) 2.4 ms",
      "b) 0.3 ms",
      "c) 6.4 ms",
      "d) 1.2 ms"
    ],
    "answer": "a) 2.4 ms",
    "explanation": "The size of the last PDU is 300 bytes, and the transmission time is calculated as 300 * 8 / 1000 kbps = 2.4 ms."
  },
  {
    "question": "A transmitter must send 6 PDUs using a Go-Back-N protocol with cumulative ACK semantics and transmission window size equal to 4 PDUs, starting the numeration from 1. The only ACK received is ACK 2, and it is received during the transmission of PDU 3. Knowing that no further ACK will be received, which actions could be executed by the transmitter after sending PDU 3 and before the timeout expiration?",
    "options": [
      "a) The transmitter transmits PDUs 4, 5, and 6",
      "b) The transmitter transmits PDUs 4 and 5",
      "c) The transmitter starts transmitting from PDU 2 onward",
      "d) The transmitter takes no action"
    ],
    "answer": "b) The transmitter transmits PDUs 4 and 5",
    "explanation": "With ACK 2 received, the window shifts and the transmitter can send PDUs 4 and 5 before the timeout expires."
  },
  {
    "question": "The Domain Name System (DNS):",
    "options": [
      "a) allows to learn the physical (i.e., geographical) position of an Internet host",
      "b) according to the OSI model provides a mapping between (3)-addresses and (2)-addresses",
      "c) assigns to a host an Ethernet address according to its IP address",
      "d) enables an application to find out the IP address of a website for which the logical name is"
    ],
    "answer": "d) enables an application to find out the IP address of a website for which the logical name is",
    "explanation": "DNS is like a phone book for the internet, translating human-readable domain names into IP addresses."
  },
  {
    "question": "What is the order of magnitude of the maximum transmission bit rate achievable in current WiFi networks?",
    "options": [
      "a) Tens of Tbits/s",
      "b) A few Gbits/s",
      "c) Some tens of Mbits/s",
      "d) Hundreds of Gbits/s"
    ],
    "answer": "b) A few Gbits/s",
    "explanation": "Current WiFi networks typically achieve transmission speeds in the range of several hundred Mbps to a few Gbps."
  },
  {
    "question": "A DHCP server deployed in a local area network provides:",
    "options": [
      "a) An electronic mail service within the local area network, hence being able to forward email messages sent by clients within the network",
      "b) An IP configuration to any IP host within the Internet which explicitly requests one, no need to request, done automatically",
      "c) A name resolution service to hosts connected to the local area network",
      "d) An IP configuration to hosts connected to the local area network"
    ],
    "answer": "d) An IP configuration to hosts connected to the local area network",
    "explanation": "A DHCP server provides IP addresses and other network configuration parameters to devices in the local area network."
  },
  {
    "question": "Which of these parameters is not provided by the DHCP server?",
    "options": [
      "a) Subnet mask",
      "b) Dynamically assigned IP address",
      "c) Default gateway address",
      "d) Current value of Round Trip Time (RTT)"
    ],
    "answer": "d) Current value of Round Trip Time (RTT)",
    "explanation": "The DHCP server does not provide RTT, which is a measure of round-trip time for packets. It only provides IP address, subnet mask, and gateway information."
  },
  {
    "question": "A UTP (Unshielded Twisted Pair) cable and an optical fiber?",
    "options": [
      "a) can be both used in transoceanic links",
      "b) can be both used in access networks",
      "c) achieve comparable bit rates",
      "d) are used in passive bus topologies"
    ],
    "answer": "b) can be both used in access networks",
    "explanation": "UTP cables and optical fibers are both commonly used in access networks, with UTP for shorter distances and optical fiber for longer distances and higher speeds."
  },
    
  {
    "question": "To avoid ambiguities in the interpretation of the semantics of cumulative ACKs, the window size of a transmitter using a Go-Back-N protocol with 4-bit long sequence numbers must be:",
    "options": [
      "a) smaller or equal to 16",
      "b) greater than 16",
      "c) equal to 16",
      "d) strictly smaller than 16"
    ],
    "answer": "d) strictly smaller than 16",
    "explanation": "The sequence number space is determined by the number of bits available (4 bits = 16 sequence numbers). To avoid ambiguities in cumulative ACK interpretation, the window size must be strictly less than 16."
  },
  {
    "question": "Consider a LAN adopting the Ethernet technology, where hosts are interconnected by switches. Which of the following claims is false?",
    "options": [
      "a) The switches introduce additional delays in the transmissions among the hosts belonging to different portions of the network that they interconnect",
      "b) The switches can support the creation of virtual LANs (VLANs)",
      "c) It is necessary to modify the configuration of the hosts connected to the LAN to ensure correct forwarding of MAC frames among the switches",
      "d) The switches separate collision domains of the portions of the network that they interconnect"
    ],
    "answer": "c) It is necessary to modify the configuration of the hosts connected to the LAN to ensure correct forwarding of MAC frames among the switches",
    "explanation": "Switches separate collision domains but do not require changes to host configurations for correct forwarding of MAC frames among them."
  },
  {
    "question": "Which of these statements about DASH is false?",
    "options": [
      "a) Is used for streaming multimedia content over HTTP",
      "b) Is based on the availability of different versions of the same multimedia content encoded at different bit rates",
      "c) Realizes a compromise between available network bandwidth and quality of multimedia content",
      "d) Produces messages that are encapsulated in RTP to implement Internet telephony"
    ],
    "answer": "d) Produces messages that are encapsulated in RTP to implement Internet telephony",
    "explanation": "DASH uses fragmented MP4 (fMP4) containers for multimedia streaming over HTTP, not RTP. It does not encapsulate messages in RTP."
  },
  {
    "question": "Which of the following protocols does not perform delimitation functions of the data units?",
    "options": [
      "A) LaPB (Link access Procedure Balanced), used in the ISDN B channel",
      "B) LaPF (Link access Producer to Frame-mode bearer services), used in Frame Relay networks",
      "C) PPP (Point-to-Point Protocol), used in domestic Internet access",
      "D) IEEE 802.2 LLC (Logical Link Control), used in local networks"
    ],
    "answer": "D) IEEE 802.2 LLC (Logical Link Control), used in local networks",
    "explanation": "IEEE 802.2 LLC does not perform delimitation of data units; this is done by the MAC layer in the data link layer."
  },
  {
    "question": "In Store-And-Forward packet-switched networks, the use of PDUs (packets) of big dimensions:",
    "options": [
      "A) It decreases the probability of losing information by mistake on the bits received",
      "B) Minimize the transfer delay because, as there is less overhead due to the control present in each PDU, the total amount of information to be sent is less",
      "C) It requires a larger header to allow the management of all the information contained in the PDU",
      "D) The overall information transfer delay increases because each node must receive the entire PDU before it can be sent on the next channel"
    ],
    "answer": "D) The overall information transfer delay increases because each node must receive the entire PDU before it can be sent on the next channel",
    "explanation": "Large packets increase transfer delays because Store-And-Forward nodes must receive the entire packet before forwarding it."
  },
  {
    "question": "Which of the following features are possible thanks to Store-And-Forward operation in a packet network?",
    "options": [
      "A) The possibility of having different transmission speeds between the different channels attested to the same switch.",
      "B) The reduction of information transfer delays through a switching node.",
      "C) The reduction in the size of packet headers.",
      "D) The possibility of using Forward Error Correction channel encodings"
    ],
    "answer": "A) The possibility of having different transmission speeds between the different channels attested to the same switch.",
    "explanation": "Store-And-Forward allows different transmission speeds between channels, enabling the adaptation of the network to various link capacities."
  },
  {
    "question": "The Domain Name System (DNS):",
    "options": [
      "A) Allows you to assign an Ethernet address to a host based on its IP address",
      "B) Realizes in OSI terms a mapping function between (3)-addresses and (2)-addresses",
      "C) Allows an application to know the IP address of a website whose logical name is known",
      "D) Lets you know the physical location of an Internet host"
    ],
    "answer": "C) Allows an application to know the IP address of a website whose logical name is known",
    "explanation": "DNS maps domain names (logical names) to IP addresses and does not provide physical location information of hosts."
  }, {
    "question": "The piggybacking technique in window protocols consists of the possibility of:",
    "options": [
      "A) Return any data units that have suffered transmission errors to the transmitter",
      "B) Concatenate multiple hits in a data unit",
      "C) Carrying feedback information and user data in the same data unit",
      "D) Have the receiver explicitly report any loss of data units to the transmitter"
    ],
    "answer": "C) Carrying feedback information and user data in the same data unit",
    "explanation": "Piggybacking allows acknowledgment information (ACK) to be included in the header of a PDU traveling in the opposite direction, reducing the need for separate ACK messages."
  },
  {
    "question": "An Ethernet card in a switch processes (that is, it reads and decides whether and how to route):",
    "options": [
      "A) Only packets with broadcast destination MAC address",
      "B) All packets, regardless of the destination address",
      "C) Only packets with unicast destination MAC address equal to that of the switch",
      "D) Only packets with multicast destination MAC address"
    ],
    "answer": "B) All packets, regardless of the destination address",
    "explanation": "Switches process all packets and make forwarding decisions based on the destination MAC address in the frame."
  },
  {
    "question": "The IP protocol:",
    "options": [
      "A) Guarantees error detection only on the datagram header",
      "B) Guarantees error detection on the header and the content of the datagram",
      "C) It does not provide any kind of error protection",
      "D) Guarantees error detection only on the content of the datagram"
    ],
    "answer": "A) Guarantees error detection only on the datagram header",
    "explanation": "The IP protocol uses a header checksum to detect errors in the header but does not provide error detection for the content of the datagram."
  },
  {
    "question": "In a fully connected mesh topology with N nodes, the number of bidirectional channels is equal to:",
    "options": [
      "A) N (N-1) / 2",
      "B) 2N",
      "C) N-1",
      "D) No"
    ],
    "answer": "A) N (N-1) / 2",
    "explanation": "In a fully connected mesh topology, each pair of nodes is connected, and the number of bidirectional channels is given by the combination formula."
  },
  {
    "question": "The DSL access network separates data and voice on the same transmission medium between the user and control panel devices using:",
    "options": [
      "A) Time multiplexing",
      "B) Multiple access to frequency division",
      "C) Multiple access to time division",
      "D) Frequency multiplexing"
    ],
    "answer": "D) Frequency multiplexing",
    "explanation": "DSL uses frequency multiplexing to separate voice and data channels, using filters to ensure they don't interfere with each other."
  },
  {
    "question": "The Stop-And-Wait protocol:",
    "options": [
      "A) It can only work using more than one numbering bit",
      "B) It can work using a number of numbering bits greater than or equal to 1",
      "C) It can only work in using a single numbering bit",
      "D) It can only work using fewer numbering bits than the window size transmission"
    ],
    "answer": "B) It can work using a number of numbering bits greater than or equal to 1",
    "explanation": "The Stop-And-Wait protocol can function with a single bit for numbering but is more reliable with a greater number of bits."
  },
  {
    "question": "In a tree topology with N nodes, the number of bidirectional channels is equal to:",
    "options": [
      "A) N",
      "B) N-1",
      "C) 2N",
      "D) N (N-1) / 2"
    ],
    "answer": "B) N-1",
    "explanation": "In a tree topology, there are N-1 bidirectional channels, as each node (except the root) is connected by one link."
  },
  {
    "question": "The transport layer on the Internet:",
    "options": [
      "A) Provides reliable information transport if UDP protocol is used",
      "B) It only provides unreliable transportation",
      "C) Always provides reliable information transport",
      "D) Provides reliable information transport if using the TCP protocol"
    ],
    "answer": "D) Provides reliable information transport if using the TCP protocol",
    "explanation": "The transport layer provides reliable transport with TCP and unreliable transport with UDP."
  },
  {
    "question": "The SMTP protocol:",
    "options": [
      "A) It operates on the UDP protocol, as emails are usually short",
      "B) It is based on messages that always include encrypted authentication",
      "C) It is used for the delivery of outgoing e-mail messages from a client to a given server",
      "D) It is used to transfer e-mail messages from a server to a client installed on a PC"
    ],
    "answer": "C) It is used for the delivery of outgoing e-mail messages from a client to a given server",
    "explanation": "SMTP is used for sending emails from a client to a server, not for receiving messages from a server."
  },
  {
    "question": "Which of these statements about VoIP is false?",
    "options": [
      "A) RTP can be used for audio-video data transfer",
      "B) RTP provides mechanisms to ensure the delivery of data in real time",
      "C) SiP can be used to initiate and close a session",
      "D) SiP provides mechanisms to determine the address of the callee"
    ],
    "answer": "D) SiP provides mechanisms to determine the address of the callee",
    "explanation": "SIP is used to establish, maintain, and terminate communication sessions, but it does not directly provide mechanisms for determining the callee's address."
  },
  {
    "question": "The IP protocol:",
    "options": [
      "a) Implements the transport layer of the internet network",
      "b) Makes large networks more scalable thanks to address aggregation",
      "c) It is not used in local networks as the ethernet technology is adequate",
      "d) Provides the mechanisms for accessing a shared medium"
    ],
    "answer": "b) Makes large networks more scalable thanks to address aggregation",
    "explanation": "The IP protocol is responsible for routing packets across networks, and address aggregation helps make large networks more scalable."
  },
  {
    "question": "A link state routing algorithm provides that:",
    "options": [
      "a) Each node of the network communicates the information on the cost of transmission to all the nodes of the network towards the nodes adjacent to it",
      "b) Each node in the network generates its own routing tables and then distributes them to the nodes only adjacent",
      "c) Each node in the network communicates information on cost and direction to the nodes adjacent to it of the roads that lead to every possible destination",
      "d) Each node on the network generates its own routing tables and then distributes them to everyone else network nodes"
    ],
    "answer": "c) Each node in the network communicates information on cost and direction to the nodes adjacent to it of the roads that lead to every possible destination",
    "explanation": "A link state algorithm involves each node sending information about the cost and direction to all other nodes."
  },
  {
    "question": "The MIME protocol allows:",
    "options": [
      "A) To have data encoded differently within the email message",
      "B) To reserve online resources so that an email message with a multimedia file attachment can reach its destination with guaranteed quality",
      "C) To transmit useful information to the recipients of the email to monitor the quality of the transmission",
      "D) Control playback of a media file downloaded from the network"
    ],
    "answer": "A) To have data encoded differently within the email message",
    "explanation": "MIME allows different types of data to be encoded in a format that can be transferred via email."
  },
  {
    "question": "Which line encoding requires a higher bitrate on the physical medium?",
    "options": [
      "A) 4B5B",
      "B) Manchester",
      "C) NRZ",
      "D) Unipolar"
    ],
    "answer": "B) Manchester",
    "explanation": "Manchester encoding uses more bandwidth because it encodes both data and clock signals, requiring a higher bitrate."
  },
  {
    "question": "Which of the following statements is false?",
    "options": [
      "A) An IP router can use ARP (Address Resolution Protocol) to know the MAC address of the router or host to which it must deliver an IP packet",
      "B) A host can use ICMP messages to verify another host's connectivity to the Internet",
      "C) An IP router, which does not perform a NAT (Network Address Translator) function, does not modify the IP addresses of the packets it must retransmit",
      "D) An IP host always only makes direct deliveries"
    ],
    "answer": "D) An IP host always only makes direct deliveries",
    "explanation": "An IP host may need to route packets through an intermediary device, so it doesn't always make direct deliveries."
  },
  {
    "question": "The transport layer in the Internet:",
    "options": [
      "A) Always provides reliable transport of information",
      "B) Just provides unreliable transportation",
      "C) Provides reliable information transport if the UDP protocol is used",
      "D) Provides reliable transport of information if the TCP protocol is used"
    ],
    "answer": "D) Provides reliable transport of information if the TCP protocol is used",
    "explanation": "TCP provides reliable transport by ensuring data integrity and order, while UDP does not."
  },
  {
    "question": "The TCP protocol:",
    "options": [
      "A) Assigns a sequence number only to acknowledgments (ACKs)",
      "B) Does not assign a sequence number to either segments or acknowledgments (ACKs)",
      "C) Assigns a sequence number to each segment and each acknowledgment (ACK)",
      "D) Assigns a sequence number only to each segment"
    ],
    "answer": "C) Assigns a sequence number to each segment and each acknowledgment (ACK)",
    "explanation": "TCP assigns a sequence number to both data segments and acknowledgments to ensure reliable communication."
  },
  {
    "question": "In a tree topology with N nodes, the number of bidirectional channels is equal to:",
    "options": [
      "A) N",
      "B) N-1",
      "C) 2N",
      "D) N(N-1)/2"
    ],
    "answer": "B) N-1",
    "explanation": "In a tree topology, the number of bidirectional channels is equal to N-1, where N is the number of nodes."
  },
  {
    "question": "An Ethernet card in a switch processes (i.e. reads and decides whether and how to route):",
    "options": [
      "A) Only packets with a broadcast destination MAC address",
      "B) Only packets with multicast destination MAC address",
      "C) All packets, regardless of the destination address",
      "D) Only packets with a unicast destination MAC address equal to that of the switch"
    ],
    "answer": "C) All packets, regardless of the destination address",
    "explanation": "An Ethernet card processes all packets, regardless of whether they are broadcast, multicast, or unicast."
  },
  {
    "question": "The minimum time necessary to send a 100 Kbyte packet between two stations separated by 300 meters, using a wired network with UTP (Unshielded Twisted Pair) cables and operating at 10Mbit/s, and crossing 3 interconnection devices operating in store-and-forward mode is of the order of:",
    "options": [
      "A) Tens of milliseconds",
      "B) Hundreds of milliseconds",
      "C) A few microseconds",
      "D) A few seconds"
    ],
    "answer": "A) Tens of milliseconds",
    "explanation": "Considering the propagation delay, transmission rate, and store-and-forward delays, the total time is in the order of tens of milliseconds."
  },
  {
    "question": "Transmission Control Protocol (TCP) congestion control is based on:",
    "options": [
      "A) On the dynamics of the transmitter window size",
      "B) On adapting the size of the transmitted segments to the state of the network",
      "C) On adapting the transmitter window to the available memory of the receiver",
      "D) On the variation in the number of parity bits inserted in the transmitted segments"
    ],
    "answer": "B) On adapting the size of the transmitted segments to the state of the network",
    "explanation": "TCP congestion control dynamically adjusts the segment size based on the current network conditions to avoid congestion."
  },
  {
    "question": "In the case in which a window protocol is used on a channel that does not allow inversions in the sequential order of the transmitted data units (i.e. on a sequential channel), assuming that a progressive non-cyclic numbering is used, the transmission and reception windows can never find yourself in the following situation:",
    "options": [
      "A) No sequence number included in the receive window and also included in the transmit window",
      "B) The smallest sequence number in the transmit window is smaller than the smallest sequence number in the receive window",
      "C) The smallest sequence number in the receive window is larger than the smallest sequence number in the transmit window",
      "D) The smallest sequence number in the receive window is smaller than the smallest sequence number in the transmit window"
    ],
    "answer": "A) No sequence number included in the receive window and also included in the transmit window",
    "explanation": "In a window protocol with sequential data numbering, the smallest sequence number in the transmit window will always be larger than or equal to the smallest sequence number in the receive window."
  },
  {
    "question": "Common channel signaling requires that:",
    "options": [
      "A) The information of multiple users is transmitted with different signals on the same transmission channel",
      "B) Each channel dedicated to the transmission of user data is associated with a different reporting channel",
      "C) The control devices of the switching exchanges, exchange signaling information in packet switching",
      "D) The signaling between the switching exchanges occurs by sharing a single channel via satellite"
    ],
    "answer": "D) The signaling between the switching exchanges occurs by sharing a single channel via satellite",
    "explanation": "Common channel signaling uses a single channel to carry signaling information between switching exchanges, often implemented via packet switching."
  },
  {
    "question": "The DSL access network separates data and voice on the same transmission medium between user equipment and exchange equipment using:",
    "options": [
      "A) Time multiplexing",
      "B) Frequency multiplexing",
      "C) Frequency division multiple access",
      "D) Time division multiple access"
    ],
    "answer": "B) Frequency multiplexing",
    "explanation": "DSL uses frequency division multiplexing (FDM) to separate voice and data signals on the same medium."
  },
  {
    "question": "The use of cookies in the HTTP protocol allows:",
    "options": [
      "A) Only a more efficient management of the exchange of data between client and server",
      "B) To remember the state of the session between two successive requests by the same client",
      "C) To avoid client authentication at each request to the server",
      "D) To guarantee that the state of a connection remains constant in time"
    ],
    "answer": "B) To remember the state of the session between two successive requests by the same client",
    "explanation": "Cookies are used in HTTP to maintain state information between requests from the same client."
  }






          
      

]

/*fetch("/home/abbossz/Projects/networks/questions.json")
.then((response) => response.json())
.then((data) => {
  questions = data;
  createQuiz();
});*/
  
  // Function to create the quiz
  function createQuiz() {
    const container = document.getElementById("quiz-container");
  
    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
  
      const questionText = document.createElement("h3");
      questionText.textContent = `${index + 1}. ${q.question}`;
      questionDiv.appendChild(questionText);
  
      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");
  
      q.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index, option, resultDiv, explanationDiv);
        optionsDiv.appendChild(button);
      });
  
      questionDiv.appendChild(optionsDiv);
  
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result");
      questionDiv.appendChild(resultDiv);
  
      const explanationDiv = document.createElement("div");
      explanationDiv.classList.add("explanation");
      explanationDiv.textContent = q.explanation;
      questionDiv.appendChild(explanationDiv);
  
      container.appendChild(questionDiv);
    });
  }
  
  // Function to check the answer
  function checkAnswer(index, selectedOption, resultDiv, explanationDiv) {
    const correctAnswer = questions[index].answer;
  
    if (selectedOption === correctAnswer) {
      resultDiv.textContent = "Correct!";
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = "Wrong!";
      resultDiv.style.color = "red";
    }
  
    // Toggle explanation
    explanationDiv.style.display =
      explanationDiv.style.display === "none" ? "block" : "none";
  }

  // Initialize the quiz
  createQuiz();
  
