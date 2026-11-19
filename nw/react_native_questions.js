const Questions = [
  {
    "type": "m",
    "question": "สถาปัตยกรรมเครือข่ายอินเทอร์เน็ตแบบ 5 ชั้น (5-layer Internet Protocol Stack) เรียงลำดับชั้นจากบนลงล่างได้อย่างถูกต้องตามหลักการของ Kurose & Ross คือข้อใด",
    "code": "",
    "answer": "Application, Transport, Network, Link, Physical",
    "choices": [
      "Application, Presentation, Session, Transport, Network",
      "Application, Transport, Network, Link, Physical",
      "Physical, Link, Network, Transport, Application",
      "Application, Transport, Internet, Network Access, Physical"
    ]
  },
  {
    "type": "m",
    "question": "กระบวนการ Encapsulation เมื่อข้อมูลถูกส่งออกจากโฮสต์ต้นทาง ลำดับการเรียกชื่อหน่วยข้อมูล (PDU) ในแต่ละชั้นโปรโตคอลคือข้อใด",
    "code": "",
    "answer": "Message -> Segment -> Datagram -> Frame -> Bit",
    "choices": [
      "Message -> Segment -> Datagram -> Frame -> Bit",
      "Packet -> Segment -> Message -> Frame -> Bit",
      "Segment -> Message -> Datagram -> Bit -> Frame",
      "Message -> Datagram -> Segment -> Frame -> Bit"
    ]
  },
  {
    "type": "m",
    "question": "ความล่าช้าชนิดใดในเครือข่ายคอมพิวเตอร์ที่ขึ้นอยู่กับความยาวของแพ็กเก็ต (L) และอัตราความเร็วของลิงก์ (R) ตามสูตร L/R",
    "code": "",
    "answer": "Transmission Delay",
    "choices": [
      "Nodal Processing Delay",
      "Queuing Delay",
      "Transmission Delay",
      "Propagation Delay"
    ]
  },
  {
    "type": "m",
    "question": "หากระยะทางระหว่างโหนดสองโหนดคือ d และความเร็วในการส่งสัญญาณในตัวกลางคือ s ค่า Propagation Delay คำนวณได้จากสูตรใด",
    "code": "",
    "answer": "d / s",
    "choices": [
      "L / R",
      "d / s",
      "s / d",
      "(L + d) / R"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดกล่าวถึงความแตกต่างระหว่าง Circuit Switching และ Packet Switching ได้อย่างถูกต้อง",
    "code": "",
    "answer": "Circuit Switching มีการจองทรัพยากรล่วงหน้าแน่นอน ส่วน Packet Switching ใช้ Statistical Multiplexing",
    "choices": [
      "Circuit Switching เหมาะสำหรับการรับส่งข้อมูลที่มีลักษณะเป็น Burst",
      "Packet Switching มีความล่าช้าคงที่และรับประกันแบนด์วิดท์เสมอ",
      "Circuit Switching มีการจองทรัพยากรล่วงหน้าแน่นอน ส่วน Packet Switching ใช้ Statistical Multiplexing",
      "Packet Switching ต้องสร้างการเชื่อมต่อจริงทางกายภาพก่อนส่งข้อมูลเสมอ"
    ]
  },
  {
    "type": "m",
    "question": "สาเหตุหลักที่ทำให้เกิด Packet Loss ในเราเตอร์ของเครือข่าย Packet Switching คืออะไร",
    "code": "",
    "answer": "บัฟเฟอร์ของคิวในเราเตอร์เต็ม (Buffer Overflow) เนื่องจากอัตราการมาถึงของแพ็กเก็ตสูงกว่าความจุของลิงก์ขาออก",
    "choices": [
      "สัญญาณนาฬิกาของเราเตอร์ไม่ตรงกัน",
      "บัฟเฟอร์ของคิวในเราเตอร์เต็ม (Buffer Overflow) เนื่องจากอัตราการมาถึงของแพ็กเก็ตสูงกว่าความจุของลิงก์ขาออก",
      "การส่งข้อมูลผ่านสายสัญญาณเกินระยะทางที่กำหนด",
      "โพรโทคอล IP ปฏิเสธการจัดส่งแพ็กเก็ตที่มีขนาดใหญ่เกินไป"
    ]
  },
  {
    "type": "m",
    "question": "ในการคำนวณ End-to-End Throughput ของเส้นทางที่มีหลายลิงก์เชื่อมต่อกัน ค่า Throughput รวมจะถูกจำกัดโดยองค์ประกอบใด",
    "code": "",
    "answer": "ค่าน้อยที่สุดของอัตราความเร็วลิงก์ตลอดเส้นทาง (Bottleneck Link)",
    "choices": [
      "ค่าเฉลี่ยความเร็วของทุกลิงก์ในเส้นทาง",
      "ผลรวมอัตราความเร็วของทุกลิงก์ในเส้นทาง",
      "ค่าน้อยที่สุดของอัตราความเร็วลิงก์ตลอดเส้นทาง (Bottleneck Link)",
      "ค่าความเร็วของลิงก์สุดท้ายที่เชื่อมเข้าสู่เครื่องรับเท่านั้น"
    ]
  },
  {
    "type": "m",
    "question": "อุปกรณ์เครือข่ายประเภทใดที่ทำงานครอบคลุมถึงชั้น Network Layer (Layer 3) ในการส่งต่อแพ็กเก็ต",
    "code": "",
    "answer": "Router",
    "choices": [
      "Repeater",
      "Link-Layer Switch",
      "Router",
      "Network Interface Card (NIC)"
    ]
  },
  {
    "type": "m",
    "question": "หากต้องการส่งแพ็กเก็ตขนาด L = 10,000 bits ผ่านลิงก์ที่มีอัตราความเร็ว R = 2 Mbps ค่า Transmission Delay ของแพ็กเก็ตนี้คือเท่าใด",
    "code": "",
    "answer": "5 มิลลิวินาที (ms)",
    "choices": [
      "0.5 มิลลิวินาที (ms)",
      "5 มิลลิวินาที (ms)",
      "50 มิลลิวินาที (ms)",
      "5 วินาที (s)"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดอธิบายหลักการทำงานแบบ Store-and-Forward ในเราเตอร์ได้ถูกต้องที่สุด",
    "code": "",
    "answer": "เราเตอร์ต้องได้รับบิตทั้งหมดของแพ็กเก็ตเข้ามาก่อน จึงจะเริ่มส่งบิตแรกของแพ็กเก็ตนั้นออกไปบนลิงก์ขาออกได้",
    "choices": [
      "เราเตอร์จะเริ่มส่งบิตแรกออกทันทีที่อ่านส่วนหัว (Header) เสร็จสิ้น",
      "เราเตอร์ต้องได้รับบิตทั้งหมดของแพ็กเก็ตเข้ามาก่อน จึงจะเริ่มส่งบิตแรกของแพ็กเก็ตนั้นออกไปบนลิงก์ขาออกได้",
      "เราเตอร์ทำการจัดเก็บแพ็กเก็ตไว้ในฮาร์ดดิสก์ก่อนส่งต่อเสมอ",
      "เราเตอร์จะส่งเฉพาะแพ็กเก็ตที่ไม่มีข้อผิดพลาดในชั้น Physical เท่านั้น"
    ]
  },
  {
    "type": "m",
    "question": "สถาปัตยกรรมเครือข่ายแบบ Peer-to-Peer (P2P) มีลักษณะเด่นอย่างไรเมื่อเปรียบเทียบกับ Client-Server",
    "code": "",
    "answer": "มีความสามารถในการขยายระบบ (Self-scalability) โดยโฮสต์ที่เข้ามาใหม่จะร่วมแบ่งปันทรัพยากรและให้บริการแก่โฮสต์อื่น",
    "choices": [
      "ต้องมีเครื่องเซิร์ฟเวอร์ส่วนกลางคอยให้บริการตลอดเวลา 24 ชั่วโมง",
      "มีความสามารถในการขยายระบบ (Self-scalability) โดยโฮสต์ที่เข้ามาใหม่จะร่วมแบ่งปันทรัพยากรและให้บริการแก่โฮสต์อื่น",
      "จัดการดูแลรักษาความปลอดภัยได้ง่ายกว่าสถาปัตยกรรมแบบ Client-Server",
      "มีความล่าช้า (Latency) ต่ำกว่าการเชื่อมต่อผ่านเซิร์ฟเวอร์เสมอ"
    ]
  },
  {
    "type": "m",
    "question": "ซ็อกเก็ต (Socket) ในระบบเครือข่ายคอมพิวเตอร์ ทำหน้าที่เปรียบเสมือนสิ่งใด",
    "code": "",
    "answer": "ประตู (Door) เชื่อมต่อระหว่างโปรเซสในชั้น Application กับโพรโทคอลในชั้น Transport",
    "choices": [
      "สายสัญญาณทางกายภาพระหว่างสองเครื่อง",
      "ประตู (Door) เชื่อมต่อระหว่างโปรเซสในชั้น Application กับโพรโทคอลในชั้น Transport",
      "หน่วยความจำแคชบนการ์ดแลน",
      "ตัวแปลงที่อยู่อิเล็กทรอนิกส์จาก IP เป็น MAC Address"
    ]
  },
  {
    "type": "m",
    "question": "องค์กรใดเป็นผู้ออกเอกสารมาตรฐานอ้างอิงสำหรับโพรโทคอลในอินเทอร์เน็ตที่เรียกว่า RFC (Request for Comments)",
    "code": "",
    "answer": "IETF (Internet Engineering Task Force)",
    "choices": [
      "IEEE",
      "ISO",
      "IETF (Internet Engineering Task Force)",
      "ITU-T"
    ]
  },
  {
    "type": "m",
    "question": "ชั้นโปรโทคอล Presentation Layer และ Session Layer ใน OSI 7-Layer Model ถูกรวมไว้ในชั้นใดของ Internet 5-Layer Stack",
    "code": "",
    "answer": "Application Layer",
    "choices": [
      "Transport Layer",
      "Application Layer",
      "Network Layer",
      "Link Layer"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดไม่ใช่บริการพื้นฐานที่โพรโทคอลในชั้น Transport Layer สามารถจัดสรรให้กับชั้น Application Layer ได้",
    "code": "",
    "answer": "การรับประกันการส่งแพ็กเก็ตด้วยความล่าช้าขั้นต่ำสุดที่แน่นอน (Delay-free Guarantee)",
    "choices": [
      "การส่งข้อมูลอย่างน่าเชื่อถือ (Reliable Data Transfer)",
      "การควบคุมอัตราการส่งข้อมูลเพื่อป้องกันการแออัด (Congestion Control)",
      "การรักษาความปลอดภัยและการเข้ารหัส (Security/Encryption)",
      "การรับประกันการส่งแพ็กเก็ตด้วยความล่าช้าขั้นต่ำสุดที่แน่นอน (Delay-free Guarantee)"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล HTTP/1.1 ใช้การเชื่อมต่อชั้น Transport แบบใดในการดึงข้อมูลเว็บเพจที่มีรูปภาพหลายรูป",
    "code": "",
    "answer": "Persistent TCP Connection (อาจใช้แบบ Pipelining หรือ Non-pipelining)",
    "choices": [
      "Non-persistent TCP Connection โดยเปิด/ปิดซ็อกเก็ตใหม่ทุกวัตถุ",
      "Persistent TCP Connection (อาจใช้แบบ Pipelining หรือ Non-pipelining)",
      "UDP Connection เพื่อความรวดเร็วในการส่งข้อมูลรูปภาพ",
      "QUIC Connection บน UDP"
    ]
  },
  {
    "type": "m",
    "question": "รหัสสถานะตอบกลับของ HTTP (HTTP Response Status Code) หมายเลข 301 มีความหมายตรงกับข้อใด",
    "code": "",
    "answer": "Moved Permanently (ทรัพยากรถูกย้ายไปยัง URL ใหม่ถาวร)",
    "choices": [
      "OK (คำขอสำเร็จ)",
      "Moved Permanently (ทรัพยากรถูกย้ายไปยัง URL ใหม่ถาวร)",
      "Bad Request (คำขอไม่ถูกต้อง)",
      "Not Found (ไม่พบทรัพยากรที่ร้องขอ)"
    ]
  },
  {
    "type": "m",
    "question": "คุณลักษณะเด่นสำคัญที่ถูกเพิ่มเข้ามาใน HTTP/2 เพื่อแก้ปัญหา Head-of-Line (HOL) Blocking ในระดับ HTTP คืออะไร",
    "code": "",
    "answer": "การแบ่งข้อความเป็นเฟรมและทำ Multiplexing หลายสตรีมบนการเชื่อมต่อ TCP เดียวกัน",
    "choices": [
      "การเปลี่ยนไปใช้ UDP แทน TCP เป็นโพรโทคอลหลัก",
      "การแบ่งข้อความเป็นเฟรมและทำ Multiplexing หลายสตรีมบนการเชื่อมต่อ TCP เดียวกัน",
      "การยกเลิกการใช้ Header ในข้อความร้องขอ",
      "การใช้คุกกี้ในการส่งข้อมูลแทนการส่งใน Body"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล HTTP/3 ถูกออกแบบมาให้ทำงานบนโพรโทคอลชั้น Transport ใด",
    "code": "",
    "answer": "QUIC (ซึ่งทำงานอยู่บน UDP)",
    "choices": [
      "TCP แบบดั้งเดิม",
      "SCTP",
      "QUIC (ซึ่งทำงานอยู่บน UDP)",
      "TLS บน TCP"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดกล่าวถึงการทำงานของ HTTP Cookies ได้อย่างถูกต้อง",
    "code": "",
    "answer": "เซิร์ฟเวอร์ส่งคุกกี้ผ่าน Header 'Set-Cookie:' และไคลเอนต์ส่งกลับผ่าน Header 'Cookie:' ในคำขอถัดไป",
    "choices": [
      "คุกกี้ทำให้โพรโทคอล HTTP กลายเป็น State-full protocol โดยสมบูรณ์ที่ระดับชั้น Transport",
      "เซิร์ฟเวอร์ส่งคุกกี้ผ่าน Header 'Set-Cookie:' และไคลเอนต์ส่งกลับผ่าน Header 'Cookie:' ในคำขอถัดไป",
      "คุกกี้ถูกเก็บบันทึกไว้ที่เซิร์ฟเวอร์เท่านั้น โดยไคลเอนต์ไม่ต้องถือข้อมูลใดๆ",
      "คุกกี้ช่วยป้องกันการโจมตีประเภท Man-in-the-Middle บนช่องทาง HTTP โดยไม่ต้องใช้ Encryption"
    ]
  },
  {
    "type": "m",
    "question": "กลไก Conditional GET ใน HTTP ใช้ Header ใดในการตรวจสอบว่าวัตถุใน Web Cache ยังคงเป็นปัจจุบันหรือไม่",
    "code": "",
    "answer": "If-Modified-Since",
    "choices": [
      "If-Match-All",
      "If-Modified-Since",
      "Cache-Control-Validate",
      "Expires-Immediately"
    ]
  },
  {
    "type": "m",
    "question": "หากเครื่องเซิร์ฟเวอร์มีวัตถุใน Web Cache ที่ยังไม่อัปเดตเมื่อได้รับ Conditional GET เซิร์ฟเวอร์จะตอบกลับด้วย รหัสสถานะ (Status Code) ใด",
    "code": "",
    "answer": "304 Not Modified",
    "choices": [
      "200 OK",
      "301 Moved Permanently",
      "304 Not Modified",
      "404 Not Found"
    ]
  },
  {
    "type": "m",
    "question": "DNS Resource Record ประเภท 'MX' ใช้สำหรับจัดเก็บข้อมูลใดในระบบ DNS",
    "code": "",
    "answer": "ชื่อโดเมนของ Mail Server ที่รับผิดชอบโดเมนนั้นๆ",
    "choices": [
      "IPv4 Address ของโฮสต์",
      "IPv6 Address ของโฮสต์",
      "ชื่อโดเมนของ Mail Server ที่รับผิดชอบโดเมนนั้นๆ",
      "ชื่อ Canonical Name สำหรับโดเมนแฝง (Alias)"
    ]
  },
  {
    "type": "m",
    "question": "โครงสร้างการสอบถามข้อมูล DNS แบบ Iterative Query มีลักษณะการทำงานอย่างไร",
    "code": "",
    "answer": "DNS Server ที่ถูกถามจะส่งคืนชื่อของ DNS Server เครื่องถัดไปที่ผู้ถามต้องไปสอบถามต่อเอง",
    "choices": [
      "DNS Server ที่ถูกถามจะไปค้นหาคำตอบแทนผู้ถามจนกว่าจะได้ IP Address กลับมา",
      "DNS Server ที่ถูกถามจะส่งคืนชื่อของ DNS Server เครื่องถัดไปที่ผู้ถามต้องไปสอบถามต่อเอง",
      "ผู้ถามจะส่งคำขอไปยัง Root Server เพียงเครื่องเดียวเพื่อรับคำตอบทันที",
      "เป็นการสอบถามข้อมูลระหว่าง Local DNS Server กับไฟล์ Hosts บนเครื่องไคลเอนต์เท่านั้น"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล SMTP ที่ใช้ในการส่งอีเมลระหว่าง Mail Server มีลักษณะสำคัญอย่างไร",
    "code": "",
    "answer": "เป็น Push Protocol ทำงานบน TCP พอร์ต 25 และส่งข้อมูลในรูปแบบ 7-bit ASCII",
    "choices": [
      "เป็น Pull Protocol ทำงานบน UDP พอร์ต 110",
      "เป็น Push Protocol ทำงานบน TCP พอร์ต 25 และส่งข้อมูลในรูปแบบ 7-bit ASCII",
      "ใช้ในการดึงอีเมลจากเซิร์ฟเวอร์มายังเครื่องไคลเอนต์",
      "ทำงานบนโพรโทคอล QUIC เพื่อความรวดเร็วในการจัดส่ง"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดอธิบายความแตกต่างระหว่างโพรโทคอล POP3 และ IMAP ในการรับอีเมลได้ถูกต้อง",
    "code": "",
    "answer": "IMAP ช่วยให้ผู้ใช้สามารถจัดหมวดหมู่และจัดการโฟลเดอร์อีเมลบนเซิร์ฟเวอร์ได้โดยตรง ส่วน POP3 นิยมดาวน์โหลดมาเก็บไว้ที่เครื่องไคลเอนต์",
    "choices": [
      "POP3 อนุญาตให้เปิดอ่านอีเมลพร้อมกันจากหลายอุปกรณ์โดยซิงค์สถานะกันตลอดเวลา",
      "IMAP ช่วยให้ผู้ใช้สามารถจัดหมวดหมู่และจัดการโฟลเดอร์อีเมลบนเซิร์ฟเวอร์ได้โดยตรง ส่วน POP3 นิยมดาวน์โหลดมาเก็บไว้ที่เครื่องไคลเอนต์",
      "POP3 ทำงานบนโปรโทคอล UDP ส่วน IMAP ทำงานบน TCP",
      "IMAP ลบอีเมลออกจากเซิร์ฟเวอร์ทันทีหลังจากดาวน์โหลดเสร็จสิ้น"
    ]
  },
  {
    "type": "m",
    "question": "ในระบบสตรีมมิงวิดีโอ เทคโนโลยี DASH (Dynamic Adaptive Streaming over HTTP) มีหลักการทำงานอย่างไร",
    "code": "",
    "answer": "ไฟล์วิดีโอถูกแบ่งเป็นชิ้นเล็กๆ หลายอัตราบิตเรต และไคลเอนต์จะเลือกปรับระดับคุณภาพวิดีโอตามแบนด์วิดท์ที่มี ณ ขณะนั้น",
    "choices": [
      "เซิร์ฟเวอร์จะปรับเปลี่ยนความละเอียดวิดีโอโดยบังคับส่งข้อมูลผ่าน UDP Socket",
      "ไฟล์วิดีโอถูกแบ่งเป็นชิ้นเล็กๆ หลายอัตราบิตเรต และไคลเอนต์จะเลือกปรับระดับคุณภาพวิดีโอตามแบนด์วิดท์ที่มี ณ ขณะนั้น",
      "ใช้เฉพาะในเครือข่ายภายใน LAN โดยไม่ต้องผ่านระบบ Web Server",
      "ไคลเอนต์ต้องทำการดาวน์โหลดไฟล์วิดีโอเต็มไฟล์ให้เสร็จสมบูรณ์ก่อนเริ่มเล่น"
    ]
  },
  {
    "type": "m",
    "question": "คำสั่งใน Python Socket Programming สำหรับ TCP Server ข้อใดที่ทำหน้าที่รับการเชื่อมต่อจากไคลเอนต์และสร้างซ็อกเก็ตใหม่ (Connection Socket) ขึ้นมา",
    "code": "",
    "answer": "serverSocket.accept()",
    "choices": [
      "serverSocket.bind()",
      "serverSocket.listen()",
      "serverSocket.accept()",
      "serverSocket.connect()"
    ]
  },
  {
    "type": "m",
    "question": "ความแตกต่างสำคัญในการสร้างซ็อกเก็ตระหว่าง UDP และ TCP ใน Python Socket Programming คืออะไร",
    "code": "",
    "answer": "UDP ใช้ SOCK_DGRAM และไม่ต้องทำการ Handshake ส่วน TCP ใช้ SOCK_STREAM และต้องสร้างการเชื่อมต่อก่อนส่งข้อมูล",
    "choices": [
      "UDP ใช้ SOCK_STREAM ส่วน TCP ใช้ SOCK_DGRAM",
      "UDP ใช้ SOCK_DGRAM และไม่ต้องทำการ Handshake ส่วน TCP ใช้ SOCK_STREAM และต้องสร้างการเชื่อมต่อก่อนส่งข้อมูล",
      "UDP ต้องเรียกใช้ฟังก์ชัน listen() เสมอ",
      "TCP ใช้ฟังก์ชัน sendto() ในการส่งข้อมูลไปยังที่อยู่ IP และพอร์ตปลายทาง"
    ]
  },
  {
    "type": "m",
    "question": "หมายเลขพอร์ตมาตรฐาน (Well-known Port) สำหรับโพรโทคอล HTTPS และ SSH คือหมายเลขใดตามลำดับ",
    "code": "",
    "answer": "443 และ 22",
    "choices": [
      "80 และ 21",
      "443 และ 22",
      "8080 และ 23",
      "53 และ 25"
    ]
  },
  {
    "type": "m",
    "question": "โครงสร้างข้อมูล 4-Tuple ที่ใช้ในการระบุซ็อกเก็ตของ TCP Connection อย่างเฉพาะเจาะจงประกอบด้วยอะไรบ้าง",
    "code": "",
    "answer": "Source IP, Source Port, Destination IP, Destination Port",
    "choices": [
      "Source MAC, Destination MAC, Source IP, Destination IP",
      "Source IP, Source Port, Destination IP, Destination Port",
      "Source IP, Destination IP, Protocol Number, Sequence Number",
      "Source Port, Destination Port, Window Size, Checksum"
    ]
  },
  {
    "type": "m",
    "question": "บทบาทหลักของ Content Distribution Network (CDN) ในการให้บริการเนื้อหาเว็บหรือวิดีโอคืออะไร",
    "code": "",
    "answer": "กระจายเครื่องเซิร์ฟเวอร์เก็บบันทึกข้อมูล (Replicated Servers) ไปยังตำแหน่งใกล้ผู้ใช้เพื่อลด Delay และยกระดับ Throughput",
    "choices": [
      "เปลี่ยนโพรโทคอลการส่งข้อมูลในชั้น Transport ให้เป็น UDP ทั้งหมด",
      "กระจายเครื่องเซิร์ฟเวอร์เก็บบันทึกข้อมูล (Replicated Servers) ไปยังตำแหน่งใกล้ผู้ใช้เพื่อลด Delay และยกระดับ Throughput",
      "ทำหน้าที่เป็น Authoritative DNS Server หลักเพียงแห่งเดียวในโลก",
      "ทำการเข้าและถอดรหัสข้อมูลไฟล์สื่อในชั้น Physical Layer"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดคือความแตกต่างระหว่างกระบวนการ Multiplexing และ Demultiplexing ในชั้น Transport Layer",
    "code": "",
    "answer": "Multiplexing รวบรวมข้อมูลจากหลายซ็อกเก็ตติด Header แล้วส่งลงชั้น Network ส่วน Demultiplexing ส่งข้อมูลจาก Segment ไปยังซ็อกเก็ตที่ถูกต้อง",
    "choices": [
      "Multiplexing เกิดขึ้นที่ฝั่งผู้รับ ส่วน Demultiplexing เกิดขึ้นที่ฝั่งผู้ส่ง",
      "Multiplexing รวบรวมข้อมูลจากหลายซ็อกเก็ตติด Header แล้วส่งลงชั้น Network ส่วน Demultiplexing ส่งข้อมูลจาก Segment ไปยังซ็อกเก็ตที่ถูกต้อง",
      "Multiplexing ใช้เฉพาะกับโพรโทคอล TCP ส่วน Demultiplexing ใช้เฉพาะกับ UDP",
      "Multiplexing คือการคำนวณ Checksum ส่วน Demultiplexing คือการตรวจสอบความถูกต้อง"
    ]
  },
  {
    "type": "m",
    "question": "พอร์ตของ UDP Demultiplexing ใช้สิ่งใดเป็นหลักในการเลือกซ็อกเก็ตเป้าหมายปลายทาง",
    "code": "",
    "answer": "Destination IP Address และ Destination Port Number",
    "choices": [
      "Destination IP Address และ Destination Port Number",
      "Source IP Address และ Source Port Number",
      "Source IP Address, Source Port, Destination IP, Destination Port",
      "MAC Address ปลายทาง และ Sequence Number"
    ]
  },
  {
    "type": "m",
    "question": "ขนาดของส่วนหัว (Header Size) ต่ำสุดของโพรโทคอล UDP มีขนาดกี่ไบต์ (Bytes)",
    "code": "",
    "answer": "8 ไบต์",
    "choices": [
      "4 ไบต์",
      "8 ไบต์",
      "20 ไบต์",
      "32 ไบต์"
    ]
  },
  {
    "type": "m",
    "question": "ฟีลด์ใดต่อไปนี้ *ไม่มี* อยู่ในส่วนหัวของโพรโทคอล UDP Segment",
    "code": "",
    "answer": "Sequence Number",
    "choices": [
      "Source Port",
      "Length",
      "Checksum",
      "Sequence Number"
    ]
  },
  {
    "type": "m",
    "question": "การคำนวณ UDP Checksum ใช้หลักการทางคณิตศาสตร์แบบใดในการตรวจจับความผิดพลาดของข้อมูล",
    "code": "",
    "answer": "1's Complement Sum ของคำขนาด 16 บิต",
    "choices": [
      "2's Complement Sum ของคำขนาด 8 บิต",
      "1's Complement Sum ของคำขนาด 16 บิต",
      "CRC-32 Polynomial Division",
      "MD5 Hashing Algorithm"
    ]
  },
  {
    "type": "m",
    "question": "ในหลักการ Reliable Data Transfer (rdt 2.0) หากแพ็กเก็ตที่ส่งไปเกิดการสูญหายหรือเสียหาย ฝั่งรับจะตอบกลับด้วยข้อความใดเพื่อขอให้ส่งใหม่",
    "code": "",
    "answer": "NAK (Negative Acknowledgment)",
    "choices": [
      "ACK (Positive Acknowledgment)",
      "NAK (Negative Acknowledgment)",
      "SYN-ACK",
      "FIN"
    ]
  },
  {
    "type": "m",
    "question": "ข้อผิดพลาดร้ายแรงของโพรโทคอล rdt 2.0 ที่นำไปสู่การพัฒนา rdt 2.1 คืออะไร",
    "code": "",
    "answer": "ข้อความ ACK หรือ NAK เองอาจเกิดการสูญหายหรือเสียหายในช่องทางสื่อสารได้",
    "choices": [
      "ไม่สามารถส่งข้อมูลขนาดใหญ่กว่า 1,000 บิตได้",
      "ข้อความ ACK หรือ NAK เองอาจเกิดการสูญหายหรือเสียหายในช่องทางสื่อสารได้",
      "ตัวส่งส่งข้อมูลเร็วกว่าตัวรับเกินไป",
      "ไม่รองรับการส่งแบบทิศทางคู่ (Full-duplex)"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล rdt 3.0 เพิ่มกลไกใดเข้ามาเพื่อรับมือกับกรณีแพ็กเก็ตข้อมูลสูญหาย (Packet Loss) ในช่องทางสื่อสาร",
    "code": "",
    "answer": "Countdown Timer (การตั้งเวลาถอยหลังเพื่อจับเวลาหมดอายุแล้วส่งใหม่)",
    "choices": [
      "การขยายขนาด Sequence Number เป็น 32 บิต",
      "Countdown Timer (การตั้งเวลาถอยหลังเพื่อจับเวลาหมดอายุแล้วส่งใหม่)",
      "การเพิ่มสายส่งข้อมูลสำรอง",
      "การใช้โพรโทคอล Forward Error Correction (FEC)"
    ]
  },
  {
    "type": "m",
    "question": "ประสิทธิภาพการใช้งานลิงก์ (Utilization: U_sender) ของโพรโทคอลแบบ Stop-and-Wait คำนวณได้จากสูตรใด",
    "code": "",
    "answer": "(L / R) / (RTT + L / R)",
    "choices": [
      "(RTT + L / R) / (L / R)",
      "(L / R) / (RTT + L / R)",
      "RTT / (L / R)",
      "N * (L / R) / RTT"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดอธิบายความแตกต่างหลักระหว่าง Pipelined Protocols แบบ Go-Back-N (GBN) และ Selective Repeat (SR) ได้ถูกต้อง",
    "code": "",
    "answer": "GBN ใช้ Cumulative ACK และหากเกิด Timeout จะส่งใหม่ตั้งแต่แพ็กเก็ตที่เสียเป็นต้นไป ส่วน SR ส่งใหม่เฉพาะแพ็กเก็ตที่เสียจริง",
    "choices": [
      "GBN มีขนาดหน้าต่างฝั่งรับ (Receiver Window) ใหญ่กว่าฝั่งส่ง",
      "GBN ใช้ Cumulative ACK และหากเกิด Timeout จะส่งใหม่ตั้งแต่แพ็กเก็ตที่เสียเป็นต้นไป ส่วน SR ส่งใหม่เฉพาะแพ็กเก็ตที่เสียจริง",
      "SR ไม่จำเป็นต้องใช้บัฟเฟอร์ที่ฝั่งรับในการเก็บบันทึกแพ็กเก็ตที่มาสลับลำดับ",
      "GBN ใช้เวลาในการส่งข้อมูลช้ากว่า Stop-and-Wait"
    ]
  },
  {
    "type": "m",
    "question": "ในการออกแบบโพรโทคอล Selective Repeat (SR) เพื่อป้องกันความสับสนของลำดับแพ็กเก็ต ขนาดของ Window Size (N) ต้องสัมพันธ์กับขนาดของ Sequence Number Space อย่างไร",
    "code": "",
    "answer": "Window Size ต้องน้อยกว่าหรือเท่ากับครึ่งหนึ่งของ Sequence Number Space (N <= 2^(k-1))",
    "choices": [
      "Window Size ต้องเท่ากับ Sequence Number Space พอดี",
      "Window Size ต้องน้อยกว่าหรือเท่ากับครึ่งหนึ่งของ Sequence Number Space (N <= 2^(k-1))",
      "Window Size ต้องใหญ่กว่า Sequence Number Space อย่างน้อย 2 เท่า",
      "ไม่จำกัดขนาด ขึ้นอยู่กับหน่วยความจำแรมของฝั่งส่ง"
    ]
  },
  {
    "type": "m",
    "question": "ขนาดขั้นต่ำของส่วนหัว (Header Size) ของ TCP Segment แบบไม่มี Options มีขนาดเท่าใด",
    "code": "",
    "answer": "20 ไบต์",
    "choices": [
      "8 ไบต์",
      "16 ไบต์",
      "20 ไบต์",
      "40 ไบต์"
    ]
  },
  {
    "type": "m",
    "question": "หมายเลข Sequence Number ใน TCP Segment หมายถึงอะไร",
    "code": "",
    "answer": "ลำดับหมายเลขไบต์แรกของข้อมูล (Stream of Bytes) ที่ส่งไปใน Segment นั้น",
    "choices": [
      "ลำดับนับจำนวนแพ็กเก็ต (1, 2, 3, ...)",
      "ลำดับหมายเลขไบต์แรกของข้อมูล (Stream of Bytes) ที่ส่งไปใน Segment นั้น",
      "หมายเลขพอร์ตต้นทางบวกด้วยขนาดของข้อมูล",
      "ค่าแฮชของข้อมูลเพย์โหลด"
    ]
  },
  {
    "type": "m",
    "question": "หมายเลข Acknowledgment Number ที่ฝั่งรับตอบกลับไปยังฝั่งส่งใน TCP หมายถึงสิ่งใด",
    "code": "",
    "answer": "หมายเลขไบต์ถัดไปที่ฝั่งรับคาดว่าจะได้รับจากฝั่งส่ง (Cumulative ACK)",
    "choices": [
      "หมายเลขไบต์สุดท้ายที่ได้รับสำเร็จแล้ว",
      "หมายเลขไบต์ถัดไปที่ฝั่งรับคาดว่าจะได้รับจากฝั่งส่ง (Cumulative ACK)",
      "จำนวนไบต์ทั้งหมดที่รับได้ในหน้าต่างการส่ง",
      "หมายเลขเซกเมนต์ที่ตรวจพบข้อผิดพลาด"
    ]
  },
  {
    "type": "m",
    "question": "การคำนวณ Timeout Interval ของ TCP ใช้สูตรตามมาตรฐาน EWMA โดยคำนวณจากค่าน้ำหนักใดบ้าง",
    "code": "",
    "answer": "EstimatedRTT และ DevRTT",
    "choices": [
      "SampleRTT และ Transmission Delay",
      "EstimatedRTT และ DevRTT",
      "Propagation Delay และ Bandwidth",
      "Congestion Window (cwnd) และ Receive Window (rwnd)"
    ]
  },
  {
    "type": "m",
    "question": "เหตุการณ์ Fast Retransmit ใน TCP จะถูกกระตุ้นให้ทำงานเมื่อเกิดสถานการณ์ใดขึ้นที่ฝั่งส่ง",
    "code": "",
    "answer": "เมื่อได้รับ Duplicate ACK ซ้ำกันเป็นจำนวน 3 ครั้ง (รวมเป็น 4 ACKs ที่เหมือนกัน)",
    "choices": [
      "เมื่อตัวจับเวลา (Timer) หมดเวลาลงพอดี",
      "เมื่อได้รับ Duplicate ACK ซ้ำกันเป็นจำนวน 3 ครั้ง (รวมเป็น 4 ACKs ที่เหมือนกัน)",
      "เมื่อขนาดของ Congestion Window ลดลงเหลือ 1 MSS",
      "เมื่อได้รับสัญญาณ ICMP Source Quench จากเราเตอร์"
    ]
  },
  {
    "type": "m",
    "question": "ฟังก์ชัน Flow Control ใน TCP มีวัตถุประสงค์เพื่ออะไร และใช้วาริเอเบิลใดในการควบคุม",
    "code": "",
    "answer": "ป้องกันไม่ให้ตัวส่ง ส่งข้อมูลเร็วเกินกว่าที่บัฟเฟอร์ของตัวรับจะรับไหว โดยใช้ค่า rwnd (Receive Window)",
    "choices": [
      "ป้องกันการแออัดของเครือข่ายเราเตอร์ โดยใช้ค่า cwnd (Congestion Window)",
      "ป้องกันไม่ให้ตัวส่ง ส่งข้อมูลเร็วเกินกว่าที่บัฟเฟอร์ของตัวรับจะรับไหว โดยใช้ค่า rwnd (Receive Window)",
      "ปรับความเร็วตามสายสัญญาณ โดยใช้ค่า RTT",
      "ควบคุมจำนวนการเชื่อมต่อซ็อกเก็ตพร้อมกัน โดยใช้ค่า ssthresh"
    ]
  },
  {
    "type": "m",
    "question": "กระบวนการทรีเวย์แฮนด์เชก (3-Way Handshake) ในการสร้างการเชื่อมต่อ TCP มีลำดับการส่ง Flag Bit อย่างไร",
    "code": "",
    "answer": "SYN -> SYN-ACK -> ACK",
    "choices": [
      "SYN -> ACK -> SYN-ACK",
      "SYN -> SYN-ACK -> ACK",
      "FIN -> FIN-ACK -> ACK",
      "RST -> SYN -> ACK"
    ]
  },
  {
    "type": "m",
    "question": "สถานะการปิดการเชื่อมต่อ TCP ฝั่งที่เริ่มส่งคำขอปิดการเชื่อมต่อ (Active Close) จะต้องรออยู่ในสถานะใดเป็นเวลา 2*MSL ก่อนจะปิดสมบูรณ์",
    "code": "",
    "answer": "TIME_WAIT",
    "choices": [
      "FIN_WAIT_1",
      "CLOSE_WAIT",
      "LAST_ACK",
      "TIME_WAIT"
    ]
  },
  {
    "type": "m",
    "question": "ในช่วง Slow Start ของ TCP Congestion Control ค่าขนาดหน้าต่างการแออัด (cwnd) จะมีอัตราการเติบโตอย่างไรเมื่อได้รับ ACK ที่ถูกต้องในแต่ละ RTT",
    "code": "",
    "answer": "เติบโตแบบทวีคูณ (Exponential Growth) โดยเพิ่มขึ้นเท่าตัวทุกๆ RTT",
    "choices": [
      "เติบโตแบบเชิงเส้น (Linear Growth) โดยเพิ่มขึ้นทีละ 1 MSS ทุก RTT",
      "เติบโตแบบทวีคูณ (Exponential Growth) โดยเพิ่มขึ้นเท่าตัวทุกๆ RTT",
      "คงที่ไม่มีการเปลี่ยนแปลง",
      "ลดลงครึ่งหนึ่งทุกครั้งที่ได้รับ ACK"
    ]
  },
  {
    "type": "m",
    "question": "เมื่อ TCP Congestion Control เข้าสู่โหมด Congestion Avoidance อัตราการปรับเพิ่มค่า cwnd จะเป็นไปตามหลักการใด",
    "code": "",
    "answer": "Additive Increase (เพิ่มขึ้น 1 MSS ต่อ 1 RTT)",
    "choices": [
      "Additive Increase (เพิ่มขึ้น 1 MSS ต่อ 1 RTT)",
      "Multiplicative Increase (เพิ่มขึ้นเป็น 2 เท่าต่อ 1 RTT)",
      "Exponential Increase",
      "Slow Decrease"
    ]
  },
  {
    "type": "m",
    "question": "ความแตกต่างสำคัญระหว่าง TCP Tahoe และ TCP Reno เมื่อเกิดเหตุการณ์ Triple Duplicate ACKs คืออะไร",
    "code": "",
    "answer": "Tahoe จะปรับ cwnd ลดลงเหลือ 1 MSS เสมอ ส่วน Reno จะปรับ cwnd ลดลงเหลือครึ่งหนึ่ง (cwnd/2 + 3 MSS) และเข้าสู่ Fast Recovery",
    "choices": [
      "Tahoe เข้าสู่ Fast Recovery ส่วน Reno จะเริ่มต้นทำงานใหม่ที่ Slow Start",
      "Tahoe จะปรับ cwnd ลดลงเหลือ 1 MSS เสมอ ส่วน Reno จะปรับ cwnd ลดลงเหลือครึ่งหนึ่ง (cwnd/2 + 3 MSS) และเข้าสู่ Fast Recovery",
      "Tahoe ใช้กับ UDP ส่วน Reno ใช้กับ TCP",
      "Tahoe ไม่มีการกำหนดค่า ssthresh"
    ]
  },
  {
    "type": "m",
    "question": "หลักการควบคุมการแออัดแบบ AIMD (Additive-Increase Multiplicative-Decrease) ใน TCP ส่งผลให้ลักษณะกราฟของ cwnd เมื่อเวลาผ่านไปมีรูปร่างอย่างไร",
    "code": "",
    "answer": "ฟันเลื่อย (Sawtooth Pattern)",
    "choices": [
      "เส้นตรงแนวระนาบคงที่",
      "บันไดขั้นบันไดเพิ่มขึ้นเรื่อยๆ",
      "ฟันเลื่อย (Sawtooth Pattern)",
      "รูปคลื่นไซน์ (Sine Wave)"
    ]
  },
  {
    "type": "m",
    "question": "หน้าที่หลักสำคัญของ Network Layer ในสถาปัตยกรรมเครือข่ายคอมพิวเตอร์คือข้อใด",
    "code": "",
    "answer": "การส่งต่อแพ็กเก็ตข้ามเครือข่ายจากโฮสต์ต้นทางไปยังโฮสต์ปลายทาง (Host-to-Host Delivery)",
    "choices": [
      "การจัดส่งข้อมูลระหว่างโปรเซสแอปพลิเคชัน (Process-to-Process Delivery)",
      "การส่งต่อแพ็กเก็ตข้ามเครือข่ายจากโฮสต์ต้นทางไปยังโฮสต์ปลายทาง (Host-to-Host Delivery)",
      "การแปลงสัญญาณดิจิทัลเป็นสัญญาณแอนะล็อกบนสายส่ง",
      "การจัดลำดับเฟรมในระดับการเชื่อมต่อทางกายภาพ"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดอธิบายความแตกต่างระหว่างบทบาทของ Forwarding และ Routing ใน Network Layer ได้ถูกต้อง",
    "code": "",
    "answer": "Forwarding เป็นการย้ายแพ็กเก็ตจากพอร์ตขาเข้า ไปยังพอร์ตขาออกภายในเราเตอร์ตัวเดียว ส่วน Routing คือการคำนวณเส้นทางภาพรวมทั้งเครือข่าย",
    "choices": [
      "Forwarding ทำงานใน Control Plane ส่วน Routing ทำงานใน Data Plane",
      "Forwarding เป็นการย้ายแพ็กเก็ตจากพอร์ตขาเข้า ไปยังพอร์ตขาออกภายในเราเตอร์ตัวเดียว ส่วน Routing คือการคำนวณเส้นทางภาพรวมทั้งเครือข่าย",
      "Forwarding ใช้ MAC Address ส่วน Routing ใช้ IP Address",
      "Forwarding ทำงานช้ากว่า Routing เนื่องจากต้องประสานงานกับเราเตอร์อื่น"
    ]
  },
  {
    "type": "m",
    "question": "ตาราง Forwarding Table ในเราเตอร์ถูกค้นหาข้อมูลโดยใช้อัลกอริทึมใดตามมาตรฐาน IPv4 Destination-based Forwarding",
    "code": "",
    "answer": "Longest Prefix Matching (การจับคู่บิตส่วนหัวเครือข่ายที่ยาวที่สุด)",
    "choices": [
      "First Match Filtering",
      "Longest Prefix Matching (การจับคู่บิตส่วนหัวเครือข่ายที่ยาวที่สุด)",
      "Shortest Exact Match",
      "Random Selection Routing"
    ]
  },
  {
    "type": "m",
    "question": "ปรากฏการณ์ Head-of-Line (HOL) Blocking ภายใน Switching Fabric ของเราเตอร์เกิดขึ้นเนื่องจากสาเหตุใด",
    "code": "",
    "answer": "แพ็กเก็ตที่อยู่ด้านหน้าสุดของคิวขาเข้ากำลังรอแย่งชิงพอร์ตขาออก ส่งผลให้แพ็กเก็ตด้านหลังที่แม้พอร์ตขาออกจะว่างอยู่ต้องติดขัดไปด้วย",
    "choices": [
      "หน่วยความจำแรมของเราเตอร์ชำรุด",
      "แพ็กเก็ตที่อยู่ด้านหน้าสุดของคิวขาเข้ากำลังรอแย่งชิงพอร์ตขาออก ส่งผลให้แพ็กเก็ตด้านหลังที่แม้พอร์ตขาออกจะว่างอยู่ต้องติดขัดไปด้วย",
      "ความเร็วของบัสช้ากว่าความเร็วของสายแลน",
      "ตาราง Routing Table เกิดการวนลูป (Routing Loop)"
    ]
  },
  {
    "type": "m",
    "question": "ส่วนหัวของ IPv4 Datagram แบบไม่มีการเพิ่ม Options มีขนาดกี่ไบต์",
    "code": "",
    "answer": "20 ไบต์",
    "choices": [
      "8 ไบต์",
      "20 ไบต์",
      "32 ไบต์",
      "40 ไบต์"
    ]
  },
  {
    "type": "m",
    "question": "ฟีลด์ Time to Live (TTL) ใน IPv4 Datagram Header มีไว้เพื่อวัตถุประสงค์ใด",
    "code": "",
    "answer": "ป้องกันไม่ให้แพ็กเก็ตหมุนวนในเครือข่ายโดยไม่มีวันสิ้นสุด (Looping) โดยจะถูกลดค่าลงทีละ 1 ทุกครั้งที่ผ่านเราเตอร์",
    "choices": [
      "จับเวลาความล่าช้า End-to-End เพื่อคำนวณ RTT",
      "ป้องกันไม่ให้แพ็กเก็ตหมุนวนในเครือข่ายโดยไม่มีวันสิ้นสุด (Looping) โดยจะถูกลดค่าลงทีละ 1 ทุกครั้งที่ผ่านเราเตอร์",
      "กำหนดอายุความคงอยู่ของไฟล์ในเว็บแคช",
      "เป็นตัวระบุเวลาการหมดอายุของ IP Address ที่ได้รับจาก DHCP"
    ]
  },
  {
    "type": "m",
    "question": "ในการทำ IP Fragmentation ฟีลด์ Fragment Offset ในส่วนหัวของ IPv4 มีหน่วยในการนับอย่างไร",
    "code": "",
    "answer": "นับเป็นจำนวนบล็อก บล็อกละ 8 ไบต์ (8-byte chunks)",
    "choices": [
      "นับเป็นจำนวนบิต (Bits)",
      "นับเป็นจำนวนไบต์ (Bytes)",
      "นับเป็นจำนวนบล็อก บล็อกละ 8 ไบต์ (8-byte chunks)",
      "นับเป็นจำนวนแพ็กเก็ตย่อย"
    ]
  },
  {
    "type": "m",
    "question": "หมายเลขอินเทอร์เน็ตโปรโตคอลตามแบบ CIDR Notation: 192.168.10.0/26 มี Subnet Mask ตรงกับข้อใด",
    "code": "",
    "answer": "255.255.255.192",
    "choices": [
      "255.255.255.0",
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224"
    ]
  },
  {
    "type": "m",
    "question": "จำนวน Host IP Address ที่ใช้งานได้จริง (Usable Hosts) ในบล็อกเครือข่าย 172.16.0.0/22 มีกี่หมายเลข",
    "code": "",
    "answer": "1022 หมายเลข",
    "choices": [
      "254 หมายเลข",
      "510 หมายเลข",
      "1022 หมายเลข",
      "2046 หมายเลข"
    ]
  },
  {
    "type": "m",
    "question": "กระบวนการขอรับหมายเลข IP Address อัตโนมัติผ่านโพรโทคอล DHCP (DORA Process) มีลำดับขั้นตอนการแลกเปลี่ยนข้อความอย่างไร",
    "code": "",
    "answer": "DHCP Discover -> DHCP Offer -> DHCP Request -> DHCP ACK",
    "choices": [
      "DHCP Discover -> DHCP Request -> DHCP Offer -> DHCP ACK",
      "DHCP Discover -> DHCP Offer -> DHCP Request -> DHCP ACK",
      "DHCP Request -> DHCP Offer -> DHCP Discover -> DHCP ACK",
      "DHCP Offer -> DHCP Discover -> DHCP ACK -> DHCP Request"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดอธิบายบทบาทการทำงานของ NAT (Network Address Translation) ได้อย่างถูกต้อง",
    "code": "",
    "answer": "แปลงหมายเลข Private IP ในเครือข่ายภายใน ให้เป็น Public IP เพื่อติดต่อกับอินเทอร์เน็ตภายนอกผ่าน NAT Translation Table",
    "choices": [
      "ทำการจัดหาและแจกจ่าย IP Address ให้อุปกรณ์ปลายทางภายใน LAN",
      "แปลงหมายเลข Private IP ในเครือข่ายภายใน ให้เป็น Public IP เพื่อติดต่อกับอินเทอร์เน็ตภายนอกผ่าน NAT Translation Table",
      "แปลงชื่อโดเมนให้เป็น IP Address",
      "ตรวจสอบและกรองไวรัสคอมพิวเตอร์ในระดับไฟล์"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดคือการเปลี่ยนแปลงสำคัญในโครงสร้างส่วนหัวของ IPv6 เมื่อเปรียบเทียบกับ IPv4",
    "code": "",
    "answer": "ส่วนหัวมีขนาดคงที่ 40 ไบต์ และตัดฟีลด์ Checksum กับ Hop-by-Hop Fragmentation ออกเพื่อความรวดเร็วในการประมวลผลของเราเตอร์",
    "choices": [
      "ขยายส่วนหัวจาก 20 ไบต์เป็น 60 ไบต์และเพิ่มฟีลด์ Checksum ให้มีความซับซ้อนมากขึ้น",
      "ส่วนหัวมีขนาดคงที่ 40 ไบต์ และตัดฟีลด์ Checksum กับ Hop-by-Hop Fragmentation ออกเพื่อความรวดเร็วในการประมวลผลของเราเตอร์",
      "ยกเลิกการใช้ฟีลด์ Hop Limit",
      "เปลี่ยนการส่งข้อมูลทั้งหมดในชั้นนี้ให้เป็นแบบการยิงสัญญาณบรอดคาสต์"
    ]
  },
  {
    "type": "m",
    "question": "กลไกในการส่งผ่าน IPv6 Datagram ผ่านโครงข่าย IPv4 ที่ยังไม่รองรับ IPv6 เรียกว่าอะไร",
    "code": "",
    "answer": "Tunneling (การแคปซูลแพ็กเก็ต IPv6 ซ้อนไว้ภายใน IPv4 Datagram)",
    "choices": [
      "Dual-Stack Switching",
      "Tunneling (การแคปซูลแพ็กเก็ต IPv6 ซ้อนไว้ภายใน IPv4 Datagram)",
      "NAT-PT Mapping",
      "Flow Labeling"
    ]
  },
  {
    "type": "m",
    "question": "ตามสถาปัตยกรรม OpenFlow ในแนวคิด Generalized Forwarding โครงสร้างของตาราง Flow Table ประกอบด้วยองค์ประกอบหลัก 3 ส่วนใดบ้าง",
    "code": "",
    "answer": "Match Fields, Counters, Actions",
    "choices": [
      "IP Address, MAC Address, Port Number",
      "Match Fields, Counters, Actions",
      "Routing Policy, Cost, Metric",
      "Header, Payload, Checksum"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล ICMP (Internet Control Message Protocol) ทำงานอยู่เหนือโพรโทคอลใด และถูกใช้เพื่อประโยชน์อะไร",
    "code": "",
    "answer": "ทำงานซ้อนอยู่ใน IP Datagram ใช้สำหรับรายงานข้อผิดพลาดและส่งข้อมูลควบคุมในชั้น Network Layer",
    "choices": [
      "ทำงานอยู่บน TCP ใช้สำหรับรับส่งไฟล์ข้อความ",
      "ทำงานซ้อนอยู่ใน IP Datagram ใช้สำหรับรายงานข้อผิดพลาดและส่งข้อมูลควบคุมในชั้น Network Layer",
      "ทำงานในชั้น Link Layer ใช้สำหรับขอ MAC Address",
      "ทำงานอยู่เหนือ UDP ใช้สำหรับแปลงชื่อโฮสต์"
    ]
  },
  {
    "type": "m",
    "question": "คำสั่ง Ping และ Traceroute อาศัยการทำงานของข้อความตอบกลับแบบใดในโพรโทคอล ICMP ตามลำดับ",
    "code": "",
    "answer": "ICMP Echo Request/Reply และ ICMP Time Exceeded (TTL หมดอายุ)",
    "choices": [
      "ICMP Echo Request/Reply และ ICMP Time Exceeded (TTL หมดอายุ)",
      "ICMP Destination Unreachable และ ICMP Redirect",
      "ICMP Router Discovery และ ICMP Source Quench",
      "ICMP Port Unreachable และ ICMP Parameter Problem"
    ]
  },
  {
    "type": "m",
    "question": "สูตรคำนวณขนาด Maximum Segment Size (MSS) ของ TCP ที่สัมพันธ์กับขนาด Maximum Transmission Unit (MTU) ของชั้น Link Layer คือข้อใด",
    "code": "",
    "answer": "MSS = MTU - (IP Header Length + TCP Header Length)",
    "choices": [
      "MSS = MTU + 40 ไบต์",
      "MSS = MTU - (IP Header Length + TCP Header Length)",
      "MSS = MTU / 2",
      "MSS = MTU - Ethernet Header Length"
    ]
  },
  {
    "type": "m",
    "question": "อัลกอริทึมจัดคิวแพ็กเก็ตในเราเตอร์แบบใดที่แบ่งแยกแพ็กเก็ตออกตามประเภทคลาส แล้วส่งแพ็กเก็ตวนสลับไปมาตามลำดับอย่างเท่าเทียมกัน",
    "code": "",
    "answer": "Round Robin (RR) / Weighted Fair Queueing (WFQ)",
    "choices": [
      "FIFO (First-In, First-Out)",
      "Priority Queueing (PQ) แบบเด็ดขาด",
      "Round Robin (RR) / Weighted Fair Queueing (WFQ)",
      "Random Early Detection (RED)"
    ]
  },
  {
    "type": "m",
    "question": "ข้อใดเป็นสถาปัตยกรรมที่แยก Control Plane ออกจาก Data Plane โดยใช้ Controller ส่วนกลางมาคุมอุปกรณ์สวิตช์",
    "code": "",
    "answer": "Software-Defined Networking (SDN)",
    "choices": [
      "Traditional Per-Router Control Architecture",
      "Software-Defined Networking (SDN)",
      "Autonomous System Border Gateway Routing",
      "Peer-to-Peer Mesh Forwarding Architecture"
    ]
  },
  {
    "type": "m",
    "question": "อัลกอริทึมค้นหาเส้นทางประเภท Link-State (เช่น Dijkstra's Algorithm) มีลักษณะเด่นอย่างไร",
    "code": "",
    "answer": "ทุกโหนดมีข้อมูลโครงสร้างโทโพโลยีและค่าใช้จ่ายลิงก์ (Link Costs) ครบถ้วนสมบูรณ์ทั่วทั้งเครือข่ายก่อนประมวลผล",
    "choices": [
      "เป็นอัลกอริทึมแบบกระจาย (Iterative & Distributed) โหนดคุยเฉพาะกับเพื่อนบ้าน",
      "ทุกโหนดมีข้อมูลโครงสร้างโทโพโลยีและค่าใช้จ่ายลิงก์ (Link Costs) ครบถ้วนสมบูรณ์ทั่วทั้งเครือข่ายก่อนประมวลผล",
      "เกิดปัญหา Count-to-Infinity ได้ง่าย",
      "อาศัยสมการ Bellman-Ford ในการคำนวณระยะทาง"
    ]
  },
  {
    "type": "m",
    "question": "อัลกอริทึม Distance-Vector (DV) คำนวณเส้นทางสั้นที่สุดโดยอาศัยสมการทางคณิตศาสตร์ใด",
    "code": "",
    "answer": "Bellman-Ford Equation: d_x(y) = min_v { c(x,v) + d_v(y) }",
    "choices": [
      "Dijkstra's Shortest Path Formula",
      "Bellman-Ford Equation: d_x(y) = min_v { c(x,v) + d_v(y) }",
      "Spanning Tree Protocol Metric Formula",
      "Kruskal's Minimum Spanning Tree Algorithm"
    ]
  },
  {
    "type": "m",
    "question": "เทคนิค Poisoned Reverse ถูกออกแบบมาเพื่อช่วยบรรเทาปัญหาใดใน Distance-Vector Routing",
    "code": "",
    "answer": "Count-to-Infinity Problem (เมื่อเส้นทางสั้นระหว่างโหนดเพื่อนบ้านเกิดความเสียหาย)",
    "choices": [
      "Subnet Mask Mismatch",
      "Count-to-Infinity Problem (เมื่อเส้นทางสั้นระหว่างโหนดเพื่อนบ้านเกิดความเสียหาย)",
      "Buffer Overflow ในเราเตอร์",
      "การซ้ำกันของ IP Address"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล OSPF (Open Shortest Path First) จัดเป็นโพรโทคอลหาเส้นทางประเภทใด และทำงานอยู่ในขอบเขตใด",
    "code": "",
    "answer": "Intra-AS Routing Protocol (Interior Gateway Protocol) แบบ Link-State",
    "choices": [
      "Inter-AS Routing Protocol แบบ Distance-Vector",
      "Intra-AS Routing Protocol (Interior Gateway Protocol) แบบ Link-State",
      "Inter-AS Routing Protocol แบบ Path-Vector",
      "Data Link Layer Broadcast Protocol"
    ]
  },
  {
    "type": "m",
    "question": "ในโครงสร้าง OSPF แบบลำดับชั้น (Hierarchical OSPF) พื้นที่ใดทำหน้าที่เป็นพื้นที่แกนหลัก (Backbone Area) ในการรับส่งข้อมูลระหว่าง Area",
    "code": "",
    "answer": "Area 0 (Area 0.0.0.0)",
    "choices": [
      "Area 1",
      "Area 0 (Area 0.0.0.0)",
      "Stub Area",
      "NSSA (Not-So-Stubby Area)"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล BGP (Border Gateway Protocol) มีความสำคัญสูงสุดในอินเทอร์เน็ตอย่างไร",
    "code": "",
    "answer": "เป็น Inter-AS Routing Protocol ที่ใช้สำหรับการแลกเปลี่ยนข้อมูลเส้นทางระหว่าง Autonomous Systems (ISPs)",
    "choices": [
      "ทำหน้าที่เป็นโพรโทคอลภายในองค์กรเพื่อจัดสรร IP Address ให้กับเครื่องลูกข่าย",
      "เป็น Inter-AS Routing Protocol ที่ใช้สำหรับการแลกเปลี่ยนข้อมูลเส้นทางระหว่าง Autonomous Systems (ISPs)",
      "ทำหน้าที่คำนวณเส้นทางสั้นที่สุดด้วยอัลกอริทึม Dijkstra ภายใน LAN",
      "ใช้ในการเข้าและถอดรหัสแพ็กเก็ตที่ส่งผ่านสายไฟเบอร์ออปติก"
    ]
  },
  {
    "type": "m",
    "question": "ข้อความโพรโทคอล BGP ทำงานอยู่บนโพรโทคอลชั้น Transport ใด และใช้หมายเลขพอร์ตใด",
    "code": "",
    "answer": "TCP พอร์ต 179",
    "choices": [
      "UDP พอร์ต 520",
      "TCP พอร์ต 179",
      "UDP พอร์ต 161",
      "TCP พอร์ต 80"
    ]
  },
  {
    "type": "m",
    "question": "แอททริบิวต์ AS-PATH ในโพรโทคอล BGP มีประโยชน์สำคัญอย่างยิ่งในเรื่องใด",
    "code": "",
    "answer": "ป้องกันการเกิด Routing Loop ระหว่าง Autonomous Systems",
    "choices": [
      "ใช้คำนวณความเร็วแบนด์วิดท์ของลิงก์",
      "ป้องกันการเกิด Routing Loop ระหว่าง Autonomous Systems",
      "ระบุหมายเลข MAC Address ของ BGP Router",
      "กำหนดระดับการบีบอัดข้อมูลแพ็กเก็ต"
    ]
  },
  {
    "type": "m",
    "question": "อินเทอร์เฟซโปรแกรมที่เชื่อมต่อระหว่าง SDN Controller กับแอปพลิเคชันควบคุมเครือข่ายด้านบน เรียกว่าอะไร",
    "code": "",
    "answer": "Northbound API (เช่น RESTful API)",
    "choices": [
      "Southbound API (เช่น OpenFlow)",
      "Northbound API (เช่น RESTful API)",
      "East-West Gateway API",
      "Socket API"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล SNMP (Simple Network Management Protocol) ใช้องค์ประกอบโครงสร้างข้อมูลใดในการจัดเก็บและระบุคุณลักษณะอุปกรณ์เครือข่าย",
    "code": "",
    "answer": "MIB (Management Information Base) และ OID (Object Identifier)",
    "choices": [
      "DNS Record Table",
      "MIB (Management Information Base) และ OID (Object Identifier)",
      "NAT Translation Matrix",
      "OpenFlow Match Table"
    ]
  },
  {
    "type": "m",
    "question": "บริการหลักของชั้น Link Layer คือการเคลื่อนย้ายข้อมูลประเภทใดผ่านสื่อกลางการสื่อสารเดี่ยว (Single Communication Link)",
    "code": "",
    "answer": "Datagram (แคปซูลลงใน เฟรม)",
    "choices": [
      "Segment",
      "Datagram (แคปซูลลงใน เฟรม)",
      "Bit Stream ทางไฟฟ้า",
      "Application Message"
    ]
  },
  {
    "type": "m",
    "question": "เทคนิคการตรวจจับข้อผิดพลาดแบบ CRC (Cyclic Redundancy Check) อาศัยการคำนวณทางคณิตศาสตร์ในลักษณะใด",
    "code": "",
    "answer": "การหารพหุนามด้วยมอดูโล-2 (Modulo-2 Arithmetic / Polynomial Division)",
    "choices": [
      "การบวกตัวเลขฐานสิบหก",
      "การหารพหุนามด้วยมอดูโล-2 (Modulo-2 Arithmetic / Polynomial Division)",
      "การคำนวณค่าเบี่ยงเบนมาตรฐาน",
      "การใช้ฟังก์ชันแฮช SHA-1"
    ]
  },
  {
    "type": "m",
    "question": "อัลกอริทึมการเข้าถึงช่องสัญญาณร่วมแบบ Random Access ชนิดใดที่มีการตรวจสอบการชนกันของสัญญาณในขณะส่งแพ็กเก็ต (Collision Detection)",
    "code": "",
    "answer": "CSMA/CD (ใช้ใน Ethernet)",
    "choices": [
      "CSMA/CA (ใช้ใน Wi-Fi)",
      "CSMA/CD (ใช้ใน Ethernet)",
      "TDMA (Time Division Multiple Access)",
      "Polling Protocol"
    ]
  },
  {
    "type": "m",
    "question": "ในระบบ Ethernet แบบ CSMA/CD หากเกิดการชนกันของสัญญาณ (Collision) โหนดจะทำการสุ่มเวลารอคอยก่อนส่งใหม่โดยใช้เทคนิคใด",
    "code": "",
    "answer": "Binary Exponential Backoff Algorithm",
    "choices": [
      "Fixed Time Delay",
      "Binary Exponential Backoff Algorithm",
      "Linear Incremental Backoff",
      "Random Round Robin"
    ]
  },
  {
    "type": "m",
    "question": "หมายเลข MAC Address มีขนาดความยาวกี่บิต และถูกกำหนดโดยองค์กรใดส่วนหน้า (OUI)",
    "code": "",
    "answer": "48 บิต (6 ไบต์) โดย 24 บิตแรกกำหนดโดย IEEE",
    "choices": [
      "32 บิต (4 ไบต์) กำหนดโดย IANA",
      "48 บิต (6 ไบต์) โดย 24 บิตแรกกำหนดโดย IEEE",
      "64 บิต (8 ไบต์) กำหนดโดย ISO",
      "128 บิต (16 ไบต์) กำหนดโดย IETF"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล ARP (Address Resolution Protocol) มีบทบาทหน้าที่อย่างไรในเครือข่าย LAN",
    "code": "",
    "answer": "ค้นหาหมายเลข MAC Address ของโฮสต์เป้าหมายจากหมายเลข IP Address ที่ทราบใน Subnet เดียวกัน",
    "choices": [
      "ค้นหาหมายเลข IP Address จากชื่อ Hostname",
      "ค้นหาหมายเลข MAC Address ของโฮสต์เป้าหมายจากหมายเลข IP Address ที่ทราบใน Subnet เดียวกัน",
      "แปลง MAC Address ให้เป็น พอร์ต TCP",
      "กระจายสัญญาณบรอดคาสต์เพื่อหาเราเตอร์ทางออก"
    ]
  },
  {
    "type": "m",
    "question": "ข้อความ ARP Request ถูกส่งออกไปในเครือข่าย LAN ด้วยที่อยู่ MAC Address ปลายทางแบบใด",
    "code": "",
    "answer": "Broadcast MAC Address (FF:FF:FF:FF:FF:FF)",
    "choices": [
      "Unicast MAC Address ของ Gateway",
      "Broadcast MAC Address (FF:FF:FF:FF:FF:FF)",
      "Multicast MAC Address (01:00:5E:00:00:00)",
      "Null MAC Address (00:00:00:00:00:00)"
    ]
  },
  {
    "type": "m",
    "question": "สวิตช์ในชั้น Data Link Layer (Layer 2 Switch) เรียนรู้ตาราง Switch Table (MAC Address Table) ได้อย่างไร",
    "code": "",
    "answer": "Self-learning โดยบันทึก MAC Address ต้นทางและอินเทอร์เฟซขาเข้าจากเฟรมที่ส่งเข้ามา",
    "choices": [
      "ผู้ดูแลระบบต้องพิมพ์ป้อนข้อมูล MAC Address ทั้งหมดด้วยตนเอง",
      "Self-learning โดยบันทึก MAC Address ต้นทางและอินเทอร์เฟซขาเข้าจากเฟรมที่ส่งเข้ามา",
      "ส่งคำขอไปยัง DHCP Server เพื่อรับตาราง MAC Address",
      "แลกเปลี่ยนตารางด้วยโพรโทคอล OSPF"
    ]
  },
  {
    "type": "m",
    "question": "ความแตกต่างพื้นฐานที่สำคัญที่สุดระหว่าง Layer 2 Switch และ Router คืออะไร",
    "code": "",
    "answer": "Switch สลับส่งเฟรมโดยอ้างอิง MAC Address ส่วน Router สลับส่งแพ็กเก็ตโดยอ้างอิง IP Address",
    "choices": [
      "Switch ทำงานใน Layer 3 ส่วน Router ทำงานใน Layer 2",
      "Switch สลับส่งเฟรมโดยอ้างอิง MAC Address ส่วน Router สลับส่งแพ็กเก็ตโดยอ้างอิง IP Address",
      "Switch ใช้สายไฟเบอร์ออปติกเท่านั้น ส่วน Router ใช้สายทองแดง",
      "Router ไม่มีการใช้บัฟเฟอร์ในการกักเก็บแพ็กเก็ต"
    ]
  },
  {
    "type": "m",
    "question": "มาตรฐาน IEEE 802.1Q ถูกใช้เพื่อวัตถุประสงค์ใดในระบบเครือข่ายสวิตชิ่ง",
    "code": "",
    "answer": "การเพิ่ม Header Tag (VLAN Tagging) ขนาด 4 ไบต์สำหรับส่งข้อมูลข้ามลิงก์ Trunk ของ Virtual LAN",
    "choices": [
      "การควบคุมการรับส่งข้อมูลผ่านไร้สาย",
      "การเพิ่ม Header Tag (VLAN Tagging) ขนาด 4 ไบต์สำหรับส่งข้อมูลข้ามลิงก์ Trunk ของ Virtual LAN",
      "การเข้าและถอดรหัสผ่านสายแลน",
      "การกำหนดพอร์ตสวิตช์ให้เป็น Power over Ethernet (PoE)"
    ]
  },
  {
    "type": "m",
    "question": "เหตุใดโพรโทคอล IEEE 802.11 Wireless LAN (Wi-Fi) จึงเลือกใช้ CSMA/CA แทนที่จะเป็น CSMA/CD เหมือน Ethernet",
    "code": "",
    "answer": "การตรวจจับการชนกันของสัญญาณ (Collision Detection) ทำได้ยากบนตัวกลางไร้สาย และมีปัญหา Hidden Terminal Problem",
    "choices": [
      "เนื่องจากเครือข่ายไร้สายไม่มีการเกิดการชนกันของสัญญาณเลย",
      "การตรวจจับการชนกันของสัญญาณ (Collision Detection) ทำได้ยากบนตัวกลางไร้สาย และมีปัญหา Hidden Terminal Problem",
      "CSMA/CA ส่งข้อมูลได้เร็วกว่า CSMA/CD 10 เท่า",
      "โพรโทคอล CSMA/CD ไม่รองรับการเข้ารหัสข้อมูล"
    ]
  },
  {
    "type": "m",
    "question": "กลไกการแลกเปลี่ยนเฟรม RTS/CTS ใน 802.11 CSMA/CA มีไว้เพื่อแก้ปัญหาใดเป็นหลัก",
    "code": "",
    "answer": "ปัญหาโหนดซ่อนเร้น (Hidden Terminal Problem)",
    "choices": [
      "ปัญหาการกระจายบรอดคาสต์มากเกินไป",
      "ปัญหาโหนดซ่อนเร้น (Hidden Terminal Problem)",
      "ปัญหาการสูญเสียรหัสผ่าน WPA2",
      "ปัญหาความล่าช้าจากตัวกระจายสัญญาณ (AP) หลายตัว"
    ]
  },
  {
    "type": "m",
    "question": "โครงสร้างส่วนหัวของเฟรม IEEE 802.11 มีฟีลด์ Address ทั้งหมดกี่ฟีลด์",
    "code": "",
    "answer": "4 ฟีลด์ (Address 1 ถึง Address 4)",
    "choices": [
      "2 ฟีลด์",
      "3 ฟีลด์",
      "4 ฟีลด์ (Address 1 ถึง Address 4)",
      "6 ฟีลด์"
    ]
  },
  {
    "type": "m",
    "question": "การเข้ารหัสแบบสมมาตร (Symmetric Key Cryptography) เช่น AES มีคุณลักษณะเด่นตรงกับข้อใด",
    "code": "",
    "answer": "ผู้ส่งและผู้รับใช้คีย์ลับเดียวกัน (Shared Secret Key) ในการเข้าและถอดรหัสข้อมูล",
    "choices": [
      "ผู้ส่งและผู้รับใช้คีย์คู่ Public Key และ Private Key คนละดอกกัน",
      "ผู้ส่งและผู้รับใช้คีย์ลับเดียวกัน (Shared Secret Key) ในการเข้าและถอดรหัสข้อมูล",
      "ไม่จำเป็นต้องใช้คีย์ในการถอดรหัส",
      "ประมวลผลได้ช้ากว่า Asymmetric Key มาก"
    ]
  },
  {
    "type": "m",
    "question": "กระบวนการสร้างลายมือชื่อดิจิทัล (Digital Signature) เพื่อรับประกันความถูกต้องและยืนยันตัวตนผู้ส่ง อาศัยคีย์ใดในการเข้ารหัสค่าแฮช (Hash Value) ของข้อความ",
    "code": "",
    "answer": "Private Key ของผู้ส่ง",
    "choices": [
      "Public Key ของผู้รับ",
      "Private Key ของผู้ส่ง",
      "Public Key ของผู้ส่ง",
      "Symmetric Shared Key"
    ]
  },
  {
    "type": "m",
    "question": "ในโพรโทคอลการยืนยันตัวตน (Authentication Protocol) การใช้ค่าตัวแปรสุ่ม Nonce มีวัตถุประสงค์สำคัญเพื่อป้องกันการโจมตีประเภทใด",
    "code": "",
    "answer": "Replay Attack (การนำข้อความยืนยันตัวตนเดิมมาส่งซ้ำ)",
    "choices": [
      "Denial of Service (DoS)",
      "Replay Attack (การนำข้อความยืนยันตัวตนเดิมมาส่งซ้ำ)",
      "SQL Injection",
      "Buffer Overflow"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล TLS (Transport Layer Security) ทำงานอยู่ในระดับใดและทำหน้าที่อย่างไร",
    "code": "",
    "answer": "ทำงานอยู่เหนือ TCP ในชั้น Application โดยให้บริการเข้ารหัสและรักษาความปลอดภัยแก่แอปพลิเคชัน เช่น HTTP (HTTPS)",
    "choices": [
      "ทำงานในชั้น Network Layer เพื่อเข้ารหัสแพ็กเก็ต IP ทั้งหมด",
      "ทำงานอยู่เหนือ TCP ในชั้น Application โดยให้บริการเข้ารหัสและรักษาความปลอดภัยแก่แอปพลิเคชัน เช่น HTTP (HTTPS)",
      "ทำงานในชั้น Link Layer เพื่อเข้าและถอดรหัสบนสายไฟเบอร์",
      "เป็นโพรโทคอลควบคุมเราเตอร์แทน OSPF"
    ]
  },
  {
    "type": "m",
    "question": "โพรโทคอล IPsec ที่ทำงานในโหมด Tunnel Mode มีลักษณะการทำงานอย่างไร",
    "code": "",
    "answer": "เข้ารหัสทั้งส่วนหัว (Header) และเพย์โหลดของแพ็กเก็ต IP เดิม แล้วแคปซูลซ้อนไว้ในแพ็กเก็ต IPsec ใหม่",
    "choices": [
      "เข้ารหัสเฉพาะข้อมูลเพย์โหลด โดยคงส่วนหัว IP เดิมไว้",
      "เข้ารหัสทั้งส่วนหัว (Header) และเพย์โหลดของแพ็กเก็ต IP เดิม แล้วแคปซูลซ้อนไว้ในแพ็กเก็ต IPsec ใหม่",
      "ทำงานเฉพาะบนเครือข่าย Wi-Fi ไร้สายเท่านั้น",
      "ใช้เฉพาะการยืนยันตัวตนระดับ MAC Address"
    ]
  }
];
  module.exports = Questions;
