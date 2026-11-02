# Student API

यह एक छोटा REST API प्रोजेक्ट है। इसकी मदद से छात्रों की सूची देख सकते हैं, नया छात्र जोड़ सकते हैं और ID से किसी छात्र की जानकारी पा सकते हैं।

## ज़रूरी चीज़ें

- Node.js और npm इंस्टॉल होने चाहिए।

## प्रोजेक्ट चलाएँ

प्रोजेक्ट फ़ोल्डर में टर्मिनल खोलकर ये कमांड चलाएँ:

```bash
npm install
npm start
```

सर्वर डिफ़ॉल्ट रूप से `http://localhost:3000` पर चलेगा। किसी दूसरे पोर्ट पर चलाने के लिए `PORT` environment variable सेट करें।

## API Endpoints

### सभी छात्र देखें

```http
GET http://localhost:3000/students
```

सफल response में छात्रों की सूची `data` में मिलेगी।

### नया छात्र जोड़ें

```http
POST http://localhost:3000/students
Content-Type: application/json
```

Request body:

```json
{
  "name": "Aman",
  "course": "BCA"
}
```

`name` और `course` दोनों non-empty strings होने चाहिए। छात्र सफलतापूर्वक जुड़ने पर `201 Created` response मिलता है।

### ID से छात्र देखें

```http
GET http://localhost:3000/students/1
```

मौजूद छात्र की जानकारी `data` में मिलेगी। गलत ID पर `400` और न मिलने पर `404` response मिलता है।

## ध्यान दें

छात्रों का डेटा अभी server की memory में रखा जाता है। Server बंद या restart होने पर नए जोड़े गए छात्र हट जाएँगे। शुरुआती सूची में तीन छात्र पहले से मौजूद हैं।
