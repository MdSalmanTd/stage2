npm install
npm run db:push
npm run dev

transaction formulation
![alt text](image.png)

questions/
├── .env
├── .env.example
├── .gitignore
├── components.json
├── drizzle.config.ts
├── eslint.config.js
├── INTERVIEW_CHALLENGE.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── tsconfig.json
├── image.png
├── public/
├── scripts/
│   ├── .gitignore
│   ├── account.ts
│   ├── api_demo.ts
│   ├── README.md
│   └── sdk_demo.ts
└── src/
    ├── env.js
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── _components/
    │   │   ├── create-post.tsx
    │   │   ├── post.tsx
    │   │   └── posts.tsx
    │   └── api/
    │       └── trpc/
    │           └── [trpc]/
    │               └── route.ts
    ├── components/
    │   └── ui/
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── select.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       └── use-toast.ts
    ├── lib/
    │   ├── utils.ts
    │   └── stellar/
    │       ├── account.ts
    │       ├── contract.ts
    │       ├── index.ts
    │       ├── transaction.ts
    │       └── types.ts
    ├── server/
    │   ├── api/
    │   │   ├── root.ts
    │   │   ├── trpc.ts
    │   │   └── routers/
    │   │       ├── post.ts
    │   │       ├── stellar.ts
    │   │       └── transaction.ts
    │   └── db/
    │       ├── index.ts
    │       └── schema.ts
    ├── styles/
    │   └── globals.css
    └── trpc/
        ├── query-client.ts
        ├── react.tsx
        └── server.ts