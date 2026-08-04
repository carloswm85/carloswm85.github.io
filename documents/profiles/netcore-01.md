- [NET Engineer - Remote](#net-engineer---remote)
  - [(1) Overall Profile](#1-overall-profile)
  - [(2) Core Technology Stack](#2-core-technology-stack)
    - [(2.1) .NET](#21-net)
    - [(2.2) API Development](#22-api-development)
    - [(2.3) MongoDB](#23-mongodb)
    - [(2.4) Messaging](#24-messaging)
      - [RabbitMQ](#rabbitmq)
      - [MassTransit](#masstransit)
  - [(3) Architecture Expectations](#3-architecture-expectations)
  - [(4) Nice-to-Have Technologies](#4-nice-to-have-technologies)
    - [Docker](#docker)
    - [Vue.js](#vuejs)
    - [Performance Optimization](#performance-optimization)
    - [Commerce / Analytics](#commerce--analytics)
  - [(5) Interview Focus Areas](#5-interview-focus-areas)
  - [(6) Match Against Your Background](#6-match-against-your-background)

---

# NET Engineer - Remote

<https://newcombin.com/apply/net-engineer/>

---

## (1) Overall Profile

This is fundamentally a **Backend Engineer / Distributed Systems Engineer** position rather than a traditional CRUD ASP.NET developer role.

The company is looking for someone who can:

- Build APIs.
- Work with NoSQL databases.
- Design asynchronous workflows.
- Understand event-driven architectures.
- Participate in deployment and production support.
- Communicate in English with international teams. ([NewCombin][1])

---

## (2) Core Technology Stack

| Area           | Technology                          | Importance |
| -------------- | ----------------------------------- | ---------- |
| Backend        | .NET Framework, .NET Core, .NET 6+  | High       |
| APIs           | ServiceStack / ASP.NET Core Web API | High       |
| Database       | MongoDB                             | High       |
| Messaging      | MassTransit + RabbitMQ              | High       |
| Source Control | Git                                 | High       |
| CI/CD          | Pipelines                           | High       |
| Testing        | Automated Testing                   | High       |
| Observability  | Logs, Metrics, Traces               | High       |
| Containers     | Docker                              | Medium     |
| Frontend       | Vue.js                              | Low        |

([NewCombin][1])

---

### (2.1) .NET

Expected knowledge:

- C#
- Dependency Injection
- Async/Await
- Background Services
- Clean Architecture
- REST APIs
- .NET Framework maintenance
- Modern .NET (.NET 6+) development

They explicitly mention both legacy and modern .NET, suggesting their ecosystem contains older systems alongside newer services. ([NewCombin][1])

---

### (2.2) API Development

The posting highlights:

- ServiceStack
- ASP.NET Web API
- ASP.NET Core Web API
- Minimal APIs

If you already know ASP.NET Core Web API, you're covering most of this requirement. ServiceStack can be learned quickly because the concepts are very similar:

- DTOs
- Dependency Injection
- REST endpoints
- Middleware
- Serialization

([NewCombin][1])

---

### (2.3) MongoDB

This is one of the strongest requirements.

They specifically mention:

- Aggregations
- Replication
- Profiling
- Schema Design
- Indexing
- Performance Tuning

This goes beyond simple CRUD operations. They expect understanding of:

```text
Collection Design
    ↓
Indexes
    ↓
Aggregation Pipelines
    ↓
Query Performance
    ↓
Production Monitoring
```

([NewCombin][1])

---

### (2.4) Messaging

This is probably the most specialized part of the stack.

#### RabbitMQ

Message broker responsible for transporting messages.

Example:

```text
Order Service
      ↓
   RabbitMQ
      ↓
Billing Service
      ↓
Email Service
```

#### MassTransit

MassTransit is a .NET framework that sits on top of RabbitMQ and simplifies event-driven communication. ([Wikipedia][2])

Typical concepts:

- Publishers
- Consumers
- Queues
- Events
- Retry Policies
- Sagas
- Dead Letter Queues

Example:

```csharp
await publishEndpoint.Publish(
    new UserCreatedEvent(...)
);
```

instead of manually managing RabbitMQ connections.

This area is often associated with:

- Microservices
- Event-driven architecture
- Distributed systems

and is likely where they will evaluate seniority. ([Wikipedia][2])

---

## (3) Architecture Expectations

The role description explicitly mentions:

- Clean Architecture
- Code Quality
- Testing Strategies
- Technical Design
- Monitoring
- Production Support

This suggests they want engineers who think beyond coding and understand:

```text
Requirements
      ↓
Architecture
      ↓
Implementation
      ↓
Testing
      ↓
Deployment
      ↓
Monitoring
```

([NewCombin][1])

---

## (4) Nice-to-Have Technologies

### Docker

Expected for local development and deployments.

### Vue.js

Only occasional frontend support.

### Performance Optimization

They mention:

- Large-scale systems
- Cost optimization
- Performance tuning

### Commerce / Analytics

Experience with:

- Affiliate systems
- Commerce platforms
- Analytics pipelines

is considered a bonus. ([NewCombin][1])

---

## (5) Interview Focus Areas

If I were preparing for this interview, I'd review:

| Priority | Topic                              |
| -------- | ---------------------------------- |
| 1        | ASP.NET Core APIs                  |
| 1        | MongoDB Aggregations               |
| 1        | RabbitMQ Concepts                  |
| 1        | MassTransit Consumers & Publishers |
| 2        | Clean Architecture                 |
| 2        | Docker                             |
| 2        | CI/CD Pipelines                    |
| 2        | Logging & Observability            |
| 3        | ServiceStack Basics                |
| 3        | Vue.js Overview                    |

---

## (6) Match Against Your Background

Based on what I know:

| Skill             | Match           |
| ----------------- | --------------- |
| .NET 8/9          | ✅ Strong       |
| ASP.NET Core APIs | ✅ Strong       |
| OpenAPI / NSwag   | ✅ Strong       |
| Docker            | ✅ Strong       |
| Git               | ✅ Strong       |
| CI/CD             | ✅ Likely       |
| MongoDB           | ⚠️ Unknown      |
| RabbitMQ          | ⚠️ Unknown      |
| MassTransit       | ⚠️ Unknown      |
| ServiceStack      | ⚠️ Unknown      |
| Vue.js            | ❌ Not apparent |

The biggest gap is not .NET itself. The differentiators for this role are **MongoDB + RabbitMQ + MassTransit**. If you can demonstrate competence in those three technologies, your existing .NET background aligns well with the rest of the stack. ([NewCombin][1])

[1]: https://newcombin.com/apply/net-engineer/?utm_source=chatgpt.com ". NET engineer - Newcombin"
[2]: https://en.wikipedia.org/wiki/MassTransit-Project?utm_source=chatgpt.com "MassTransit-Project"
