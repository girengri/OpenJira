interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description:
                "Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui conseguat.",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            description:
                "Quisque interdum ex felis. In nec sapien ex. Curabitur sit amet sapien id est accumsan.",
            status: "in-progress",
            createdAt: Date.now(),
        },
        {
            description:
                "Maecenas fermentum lorem vitae placerat lobortis. Morbi luctus hendrerit leo, a dictum quam vulputate non.",
            status: "finished",
            createdAt: Date.now(),
        },
    ],
};
