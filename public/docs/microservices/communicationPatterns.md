# 🌐 Microservices & Distributed Systems — Communication Patterns
### 📚 Self-Learning Notes | Hinglish Edition
> _"Services ek doosre se kaise baat karti hain — poora guide ek jagah"_

---

## 📋 Table of Contents

1. [Communication ke Types — Overview](#1-communication-ke-types--overview)
2. [Synchronous Communication](#2-synchronous-communication-sync)
3. [Asynchronous Communication](#3-asynchronous-communication-async)
4. [Event-Driven Communication](#4-event-driven-communication)
5. [Message Queue vs Event Streaming](#5-message-queue-vs-event-streaming)
6. [Service-to-Service Direct Calls](#6-service-to-service-direct-calls)
7. [API Gateway Pattern](#7-api-gateway-pattern)
8. [Service Mesh](#8-service-mesh)
9. [gRPC Communication](#9-grpc-communication)
10. [WebSocket & Real-time Communication](#10-websocket--real-time-communication)
11. [GraphQL in Microservices](#11-graphql-in-microservices)
12. [Saga Pattern — Distributed Transactions](#12-saga-pattern--distributed-transactions)
13. [Pub/Sub Pattern](#13-pubsub-pattern)
14. [Backpressure & Flow Control](#14-backpressure--flow-control)
15. [Circuit Breaker Pattern](#15-circuit-breaker-pattern)
16. [Retry & Timeout Strategies](#16-retry--timeout-strategies)
17. [Comparison Table — Quick Reference](#17-comparison-table--quick-reference)
18. [Mera Case ke liye Recommendation](#18-mera-case-ke-liye-recommendation)

---

## 1. Communication ke Types — Overview

Distributed systems mein services ko **data share** karna hota hai. Yeh kaam 2 tareeqon se hota hai:

```
┌─────────────────────────────────────────────────────┐
│            COMMUNICATION TYPES                      │
│                                                     │
│   SYNCHRONOUS              ASYNCHRONOUS             │
│   (Request-Reply)          (Fire & Forget)          │
│                                                     │
│   • REST / HTTP            • Message Queues         │
│   • gRPC                   • Event Streaming        │
│   • GraphQL                • Pub/Sub                │
│   • WebSocket (2-way)      • Event-Driven           │
└─────────────────────────────────────────────────────┘
```

| Type | Matlab | Example |
|---|---|---|
| **Synchronous** | Request bhejo, response ka wait karo | HTTP REST call |
| **Asynchronous** | Request bhejo, wait mat karo, baad mein result milega | RabbitMQ, Kafka |

> 💡 **Rule of thumb:** Agar turant jawab chahiye → Sync. Agar background mein kaam chalega → Async.

---

## 2. Synchronous Communication (Sync)

### 🔵 Kya hota hai?

Service A, Service B ko call karti hai aur **response aane tak ruki rehti hai**.

```
Service A ──── Request ────► Service B
Service A ◄─── Response ─── Service B
(A ruka raha tha is dauraan)
```

### 🔵 REST over HTTP/HTTPS

Sabse zyada use hone wala pattern. JSON data exchange hoti hai.

```
GET  /users/123          → User fetch karo
POST /orders             → Naya order banao
PUT  /orders/456         → Order update karo
DELETE /products/789     → Product delete karo
```

**✔️ Fayde:**
- Simple aur samajhne mein aasaan
- Browser, mobile — sab support karte hain
- Debugging aasaan hai (Postman se test kar sakte ho)

**❌ Nuqsaan:**
- Service B down ho to Service A bhi fail ho sakti hai
- Latency add hoti hai chain mein
- Tight coupling — A ko B ka URL pata hona chahiye

---

### 🔵 HTTP/2 vs HTTP/1.1

| Feature | HTTP/1.1 | HTTP/2 |
|---|---|---|
| Connections | Ek request, ek connection | Ek connection pe multiple requests |
| Header | Har request mein full headers | Compressed headers |
| Speed | Slow (head-of-line blocking) | Fast (multiplexing) |
| Use | Legacy REST APIs | Modern gRPC, APIs |

---

## 3. Asynchronous Communication (Async)

### 🟡 Kya hota hai?

Service A message bhejti hai aur **wait nahi karti**. Service B apne time pe process karta hai.

```
Service A ──── Message ────► [Queue/Broker] ────► Service B
(A aage badh gayi)                               (B baad mein process karega)
```

### 🟡 Kyun use karte hain?

- **Decoupling:** A aur B ka direct connection nahi — A ko pata bhi nahi chahiye B exist karta hai
- **Resilience:** B temporarily down ho to messages queue mein safe rahenge
- **Load leveling:** Suddenly zyada requests aayein to queue buffer ki tarah kaam karta hai

**✔️ Fayde:**
- Services independent hain — ek gire to doosri chalti rahegi
- High throughput handle ho sakti hai
- Retry automatic hoti hai

**❌ Nuqsaan:**
- Debugging mushkil (messages kahan hain track karna padta hai)
- Eventual consistency — foran result nahi milta
- Extra infrastructure chahiye (broker/queue server)

---

## 4. Event-Driven Communication

### 🟠 Concept

Ek service **event publish** karti hai (kuch hua hai), baaki services apni marzi se **subscribe** karti hain.

```
Order Service ──► "OrderPlaced" Event ──► [Event Bus]
                                               │
                              ┌────────────────┼────────────────┐
                              ▼                ▼                ▼
                        Payment Svc     Inventory Svc    Email Svc
                     (payment lega)   (stock ghataega)  (email bhejega)
```

### 🟠 Event Types

| Event Type | Matlab | Example |
|---|---|---|
| **Domain Event** | Business action hua | `OrderPlaced`, `UserRegistered` |
| **Integration Event** | Service boundary cross kiya | `PaymentProcessed` (bahar bhejna) |
| **Command Event** | Koi kaam karo | `SendEmail`, `UpdateInventory` |

### 🟠 AWS mein Event-Driven

```
Producer → Amazon EventBridge → Consumer Services
Producer → Amazon SNS         → Multiple Subscribers
Producer → Amazon SQS         → Single Consumer (queue)
```

---

## 5. Message Queue vs Event Streaming

### 📬 Message Queue (RabbitMQ / Amazon SQS)

```
Producer ──► [Queue] ──► Consumer
             Message ek baar process hoti hai
             Consume hone ke baad delete ho jati hai
```

**Use karo jab:**
- Ek message ek hi service ko process karni hai
- Task distribution chahiye (job workers)
- Order processing, email sending

**AWS Tool:** Amazon SQS

---

### 📡 Event Streaming (Apache Kafka / Amazon Kinesis)

```
Producer ──► [Topic/Stream] ──► Consumer 1
                             ──► Consumer 2
                             ──► Consumer 3
             Events persist rehti hain (days/weeks)
             Multiple consumers same event padh sakte hain
```

**Use karo jab:**
- Same event multiple services ko chahiye
- Event history replay karni ho
- Real-time analytics
- Audit log banana ho

**AWS Tool:** Amazon Kinesis, Amazon MSK (Managed Kafka)

---

### 🔄 Key Difference

| Feature | Message Queue | Event Streaming |
|---|---|---|
| Message consumption | Ek consumer | Multiple consumers |
| Message retention | Delete after consume | Persist for replay |
| Order guarantee | FIFO (SQS FIFO) | Partition-level ordering |
| Use case | Task queues | Event sourcing, analytics |
| AWS service | SQS | Kinesis / MSK |
| Open source | RabbitMQ | Apache Kafka |

---

## 6. Service-to-Service Direct Calls

### 🔗 Internal REST Calls

Services apas mein directly HTTP call karti hain (internal network pe).

```
User Service ──► http://order-service/orders ──► Order Service
```

**Problems:**
- Service discovery chahiye (IP ya DNS se address dhundhna)
- Agar Order Service down hai to User Service bhi fail
- Chain mein zyada services = zyada failure points

**Solution:** Circuit Breaker + Retry (neeche dekho)

---

### 🔗 AWS mein Internal Communication

```
EC2 → EC2          : Private IP ya Route 53 DNS
ECS → ECS          : AWS Cloud Map (service registry)
Lambda → Lambda    : Direct invoke (sync) ya SNS/SQS (async)
EKS → EKS          : Kubernetes Service DNS
```

---

## 7. API Gateway Pattern

### 🚪 Kya hota hai?

**Single entry point** — bahar se aane wali saari requests pehle Gateway se guzarti hain.

```
Client (Mobile/Web)
        │
        ▼
  [API Gateway]  ← Ek hi address
   /    |    \
  ▼     ▼     ▼
Auth  Order  Product
Svc   Svc    Svc
```

### 🚪 Gateway kya karta hai?

| Kaam | Matlab |
|---|---|
| **Routing** | Request sahi service ko bhejta hai |
| **Authentication** | Token verify karta hai |
| **Rate Limiting** | Zyada requests block karta hai |
| **Logging** | Saari requests ka record rakhta hai |
| **SSL Termination** | HTTPS yahan khatam, andar HTTP |
| **Request Transformation** | Request/response modify kar sakta hai |

**AWS Tool:** Amazon API Gateway, AWS App Mesh  
**Open Source:** Kong, Nginx, Traefik

**✔️ Best for:** Public APIs, mobile backends, auth + rate limiting  
**❌ Issue:** Extra hop = thodi latency, aur ek point of failure

---

## 8. Service Mesh

### 🕸️ Kya hota hai?

Har service ke saath ek **sidecar proxy** (Envoy) hota hai jo communication handle karta hai.

```
Service A ←→ [Envoy Proxy] ←─────────────► [Envoy Proxy] ←→ Service B
                  │                               │
                  └──────── Control Plane ────────┘
                            (Istio / Linkerd)
```

### 🕸️ Sidecar kya karta hai?

- **mTLS** — service-to-service encrypted communication
- **Load balancing** — khud traffic distribute karta hai
- **Retries & Timeouts** — automatically handle karta hai
- **Observability** — metrics, traces, logs collect karta hai
- **Traffic shaping** — canary, blue/green deployments

**Tools:** Istio, Linkerd, AWS App Mesh, Consul Connect

**✔️ Best for:** Large-scale Kubernetes environments, complex traffic control  
**❌ Issue:** Bohat zyada complexity, learning curve steep hai

---

## 9. gRPC Communication

### ⚡ Kya hota hai?

Google ka banaya protocol — **Protocol Buffers (Protobuf)** use karta hai JSON ki jagah. Binary format hai, is liye fast hai.

```
Service A ──── Protobuf (binary) ────► Service B
               (JSON se 5-10x fast)
```

### ⚡ REST vs gRPC

| Feature | REST/JSON | gRPC/Protobuf |
|---|---|---|
| Data format | Text (JSON) | Binary (Protobuf) |
| Speed | Medium | Fast (5-10x) |
| Schema | Optional (OpenAPI) | Strict (.proto file) |
| Browser support | Full | Limited (gRPC-Web) |
| Streaming | No (WebSocket alag hai) | Built-in streaming |
| Use case | Public APIs | Internal service calls |

### ⚡ gRPC Streaming Types

```proto
// 1. Unary — normal request/response
rpc GetUser(UserRequest) returns (UserResponse);

// 2. Server Streaming — server multiple responses bhejta hai
rpc GetOrders(OrderRequest) returns (stream OrderResponse);

// 3. Client Streaming — client multiple requests bhejta hai
rpc UploadFile(stream FileChunk) returns (UploadResponse);

// 4. Bidirectional Streaming — dono taraf se stream
rpc Chat(stream Message) returns (stream Message);
```

**AWS mein:** ALB gRPC support karta hai (HTTP/2 pe)

**✔️ Best for:** Internal microservices, high performance, polyglot systems  
**❌ Issue:** Browser directly support nahi karta, debugging harder

---

## 10. WebSocket & Real-time Communication

### 🔴 WebSocket

**Persistent connection** — ek baar connect hua to dono side se message bhej sakte hain bina naya connection banaye.

```
Client ──── Handshake (HTTP Upgrade) ────► Server
Client ◄══════ Persistent Connection ════► Server
       (dono taraf se real-time data flow)
```

**Use cases:**
- Live chat applications
- Real-time notifications
- Live dashboards (stock prices, monitoring)
- Online gaming
- Collaborative editing (Google Docs jaise)

**AWS Tool:** API Gateway WebSocket APIs, AWS AppSync (subscriptions)

---

### 🔴 Server-Sent Events (SSE)

Sirf **server se client** ko data push hota hai (one-way).

```
Client ──── Request ────► Server
Client ◄══ Events ══════ Server  (server updates bhejta rehta hai)
```

**Use cases:** Live feeds, notifications, progress updates  
**Faida:** WebSocket se simple, HTTP pe kaam karta hai

---

### 🔴 Long Polling

Client request karta hai, server **tab tak hold karta hai** jab tak koi update na ho.

```
Client ──── Request ────► Server (waits...)
Client ◄─── Response ─── Server (jab koi event hua)
Client ──── Next Request ► Server (foran dobara)
```

**Use:** Legacy systems, jahan WebSocket available nahi  
**Issue:** Inefficient — zyada connections, zyada load

---

## 11. GraphQL in Microservices

### 📊 Kya hota hai?

Client **exactly** woh data maangta hai jo use chahiye — na zyada, na kam.

```
// REST mein (over-fetching)
GET /users/123  →  {id, name, email, phone, address, created_at, ...}
(poora object milta hai, chahe sirf name chahiye ho)

// GraphQL mein (precise)
query { user(id: 123) { name email } }
→  {name: "Ali", email: "ali@gmail.com"}
(sirf jo manga woh mila)
```

### 📊 GraphQL Federation

Multiple microservices ek **unified GraphQL schema** expose karte hain.

```
Client ──► [GraphQL Gateway/Router]
                   │
         ┌─────────┼─────────┐
         ▼         ▼         ▼
     User        Order     Product
    Subgraph    Subgraph   Subgraph
```

**Tool:** Apollo Federation, AWS AppSync  
**✔️ Best for:** Complex frontends, mobile apps, BFF (Backend for Frontend) pattern  
**❌ Issue:** Caching mushkil hai, N+1 query problem

---

## 12. Saga Pattern — Distributed Transactions

### 🔄 Problem

Microservices mein **ek bada transaction** multiple services mein failta hai:

```
Order Service → Payment Service → Inventory Service → Shipping Service
   ✅ Done        ✅ Done            ❌ FAILED!
Agar Inventory fail ho gaya to Payment wapas kaise hoga?
```

### 🔄 Saga Solution

Har step ke saath ek **compensating transaction** hoti hai (undo karne ke liye).

---

### 🔄 Choreography-based Saga

Services events pe react karti hain — koi central coordinator nahi.

```
Order Svc ──► "OrderCreated" event
                    │
              Payment Svc ──► "PaymentDone" event
                                    │
                              Inventory Svc ──► "StockReserved" event
                                                      │
                                              Shipping Svc ──► "OrderShipped"

AGAR koi step fail ho:
Inventory FAIL ──► "StockFailed" event ──► Payment Svc compensates (refund)
                                       ──► Order Svc compensates (cancel)
```

**✔️ Faida:** Simple, no central point of failure  
**❌ Issue:** Complex to track, hard to debug

---

### 🔄 Orchestration-based Saga

Ek **central orchestrator** (Saga Coordinator) decide karta hai kya karna hai.

```
         [Saga Orchestrator]
          /       |        \
         ▼        ▼         ▼
     Payment  Inventory  Shipping
      Svc       Svc        Svc

Orchestrator step by step commands deta hai
Fail hone pe orchestrator compensating transactions trigger karta hai
```

**AWS Tool:** AWS Step Functions (state machine = orchestrator)  
**✔️ Faida:** Easy to track, clear flow  
**❌ Issue:** Orchestrator ek bottleneck ban sakta hai

---

## 13. Pub/Sub Pattern

### 📢 Kya hota hai?

**Publisher** message bhejta hai **topic** pe. Ek ya zyada **Subscribers** us topic pe listen karte hain.

```
Publisher ──► [Topic: "user.registered"]
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
     Welcome       Analytics    Onboarding
     Email Svc      Svc          Svc
```

**Publisher ko pata nahi kaun sun raha hai — loose coupling!**

### 📢 AWS mein Pub/Sub

```
SNS (Simple Notification Service) = Topic
SQS (Simple Queue Service)        = Queue (subscriber)

SNS Topic ──► SQS Queue 1 ──► Service A
          ──► SQS Queue 2 ──► Service B
          ──► Lambda Function ──► Service C
          ──► Email/SMS ──► User
```

**Fan-out Pattern:** Ek SNS message → Multiple SQS queues → Multiple services

---

## 14. Backpressure & Flow Control

### 🚦 Problem

Agar producer **zyada fast** data bheje aur consumer **slow** ho:

```
Producer: 10,000 msg/sec ──► Consumer: 100 msg/sec
                         ──► Queue overflow → data loss!
```

### 🚦 Backpressure Solutions

| Technique | Matlab |
|---|---|
| **Queue buffering** | Messages queue mein store karo, consumer apni speed se le |
| **Rate limiting** | Producer ko slow karo (throttle) |
| **Load shedding** | Overflow pe naye requests reject karo |
| **Batching** | Multiple messages ek saath process karo |
| **Circuit Breaker** | Consumer down ho to aur mat bhejo |

**AWS mein:** SQS automatically buffer karta hai. Lambda concurrency limits se backpressure control hoti hai.

---

## 15. Circuit Breaker Pattern

### ⚡ Problem

Service B slow ya down hai, phir bhi Service A baar baar call karte reh rahi hai → sab threads block ho jaate hain.

### ⚡ Circuit Breaker States

```
        ┌─────────────────────────────────────────┐
        │                                         │
        ▼           failures > threshold          │
    [CLOSED] ──────────────────────────► [OPEN]   │
    (normal)                            (reject   │
        ▲                               all calls)│
        │                                    │    │
        │         timeout ke baad            ▼    │
        │                           [HALF-OPEN]   │
        │         test call success     (ek try)  │
        └───────────────────────────────────┘    │
                                                  │
              test call fail ────────────────────►┘
```

| State | Kya hota hai |
|---|---|
| **CLOSED** | Normal — sab requests jaati hain |
| **OPEN** | Band — sab requests turant fail (no wait) |
| **HALF-OPEN** | Test mode — ek request jaane do, dekho kya hoga |

**Libraries:** Resilience4j (Java), Polly (.NET), Hystrix (Netflix, deprecated)  
**AWS:** ALB health checks + Auto Scaling natural circuit breaker hai

---

## 16. Retry & Timeout Strategies

### 🔁 Retry

Failed request dobara try karo — **lekin sahi tareeqe se**.

```
❌ WRONG — Simple retry (thundering herd problem)
Fail → Retry immediately → Fail → Retry immediately → Server overwhelm!

✅ CORRECT — Exponential Backoff with Jitter
Fail → Wait 1s → Fail → Wait 2s → Fail → Wait 4s → Fail → Wait 8s...
+ Random jitter taake sab clients same time pe retry na karein
```

### 🔁 Retry with Exponential Backoff

```
Attempt 1: fail → wait 1s
Attempt 2: fail → wait 2s
Attempt 3: fail → wait 4s
Attempt 4: fail → wait 8s
Attempt 5: fail → GIVE UP (max retries reached)
```

**AWS mein:** SDK automatically exponential backoff karta hai. SQS mein Dead Letter Queue (DLQ) ultimately failed messages ke liye.

---

### ⏱️ Timeout

Request ka zyada time tak wait karna → resources waste. **Always timeouts set karo.**

| Timeout Type | Matlab |
|---|---|
| **Connection Timeout** | Connection establish hone ka wait |
| **Read Timeout** | Response aane ka wait |
| **Idle Timeout** | Inactive connection ka wait |

**Rule:** Timeout < downstream service ka SLA

---

### 🔁 Idempotency

Retry safe ho iske liye operations **idempotent** hone chahiye:

```
Idempotent = Ek baar karo ya 100 baar, result same ho

✅ GET /users/123    → har baar same user milega
✅ PUT /orders/456   → same data se update karo → same result
❌ POST /payments    → har baar naya payment create hoga!

Fix: Idempotency key bhejo
POST /payments
Header: Idempotency-Key: unique-uuid-here
→ Duplicate request? Server purana result return karta hai
```

---

## 17. Comparison Table — Quick Reference

| Pattern | Type | Coupling | Latency | Complexity | AWS Service |
|---|---|---|---|---|---|
| REST/HTTP | Sync | Tight | Low-Med | Low | API GW, ALB |
| gRPC | Sync | Tight | Very Low | Medium | ALB (HTTP/2) |
| GraphQL | Sync | Medium | Medium | High | AppSync |
| Message Queue | Async | Loose | Low | Low-Med | SQS |
| Event Streaming | Async | Very Loose | Low | High | Kinesis, MSK |
| Pub/Sub | Async | Very Loose | Low | Medium | SNS + SQS |
| WebSocket | Realtime | Medium | Very Low | Medium | API GW WS |
| Event-Driven | Async | Very Loose | Varies | Medium | EventBridge |
| Service Mesh | Infra | Loose | Low | Very High | App Mesh |
| Saga | Pattern | Loose | High | Very High | Step Functions |
| Circuit Breaker | Pattern | N/A | N/A | Medium | Custom / LB |

---

## 18. Mera Case ke liye Recommendation

### 🎯 Starting Out (Simple Setup)

```
Client → API Gateway (REST) → Services → SQS (async tasks)
```
- Simple, scalable, manageable complexity

### 🎯 Growing Scale

```
Client → API Gateway → Services
                          │
                     SNS/SQS for events
                     RDS / DynamoDB
                     Step Functions for sagas
```

### 🎯 Advanced / Enterprise

```
Client → API Gateway / GraphQL
       → Service Mesh (App Mesh / Istio)
       → Kafka/Kinesis for event streaming
       → Circuit Breakers everywhere
       → Distributed tracing (X-Ray / Jaeger)
```

---

### 🏁 Final Decision Matrix

**Abhi (Beginner/Intermediate):**
- ✅ **REST + HTTP** — primary communication
- ✅ **SQS** — async tasks ke liye
- ✅ **SNS + SQS** — fan-out pattern
- ✅ **API Gateway** — public facing APIs

**Jab scale karo:**
- 🚀 **gRPC** — internal service speed chahiye
- 🚀 **Kinesis / Kafka** — real-time event streaming
- 🚀 **Step Functions** — complex workflows / sagas
- 🚀 **Service Mesh** — Kubernetes pe jao

**Hamesha use karo (pattern level):**
- ⚙️ **Circuit Breaker** — production mein must hai
- ⚙️ **Retry + Exponential Backoff** — AWS SDK mein built-in
- ⚙️ **Idempotency Keys** — payment/critical APIs mein
- ⚙️ **Dead Letter Queue** — SQS ke saath DLQ set karo

---

> 📝 **Note:** Yeh notes continuously update hoti rehni chahiye. Har pattern ko ek chota project mein implement karo — padhne se zyada samajh ayega!

_Last Updated: 2026 | Made with ❤️ for self-learning_