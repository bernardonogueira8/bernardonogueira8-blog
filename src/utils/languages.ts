export interface Language {
    name: string;
    iconName: string;
    className?: string;
}

export const languages: Record<string, Language> = {
    angular: {
        name: "Angular",
        iconName: "angular",
    },
    astro: {
        name: "Astro",
        iconName: "astro",
    },
    bootstrap: {
        name: "Bootstrap",
        iconName: "bootstrap",
    },
    cloudflare: {
        name: "Cloudflare",
        iconName: "cloudflare",
    },
    html: {
        name: "HTML 5",
        iconName: "html",
    },
    javascript: {
        name: "JavaScript",
        iconName: "javascript",
    },
    mongo: {
        name: "MongoDb",
        iconName: "mongo",
    },
    mysql: {
        name: "MySQL",
        className: "bg-[#f6ece1]!",
        iconName: "mysql",
    },
    wordpress: {
        name: "Wordpress",
        iconName: "wordpress",
    },
    node: {
        name: "Node.js",
        iconName: "node",
    },
    tailwind: {
        name: "Tailwind CSS",
        iconName: "tailwind",
    },
    figma: {
        name: "Figma",
        iconName: "figma",
    },
    firebase: {
        name: "Firebase",
        iconName: "firebase",
    },
    markdown: {
        name: "Markdown",
        iconName: "markdown",
    },
    php: {
        name: "PHP",
        iconName: "php",
    },
    sass: {
        name: "Sass",
        iconName: "sass",
    },
    ts: {
        name: "TypeScript",
        iconName: "typescript",
    },
    git: {
        name: "Git",
        iconName: "git",
    },
    css: {
        name: "CSS",
        iconName: "css",
    },
    vercel: {
        name: "Vercel",
        iconName: "vercel",
    },
    netlify: {
        name: "Netlify",
        iconName: "netlify",
    },
    gatsby: {
        name: "Gatsby",
        iconName: "gatsby",
    },
    windsurf: {
        name: "Windsurf",
        iconName: "windsurf-logo",
    },
    cursor: {
        name: "Cursor",
        iconName: "cursor-ia",
    },
    deepseek: {
        name: "DeepSeek",
        iconName: "deepseek",
    },
    python: {
        name: "Python",
        className: "bg-[#f6ece1]!",
        iconName: "python",
    },
    power: {
        name: "Power BI",
        className: "bg-[#f6ece1]!",
        iconName: "powerbi",
    },
    laravel: {
        name: "Laravel",
        iconName: "laravel",
    },
    sql: {
        name: "SQL",
        className: "bg-[#f6ece1]!",
        iconName: "sql",
    },
    pandas: {
        name: "Pandas",
        className: "bg-[#f6ece1]!",
        iconName: "pandas",
    },
    mlflow: {
        name: "MLFlow",
        className: "bg-[#f6ece1]!",
        iconName: "mlflow",
    },
    tensorflow: {
        name: "TensorFlow",
        className: "bg-[#f6ece1]!",
        iconName: "tensorflow",
    },
    scikit_learn: {
        name: "Scikit Learn",
        className: "bg-[#f6ece1]!",
        iconName: "scikit_learn",
    },
    matplotlib: {
        name: "Matplotlib",
        iconName: "matplotlib",
    },
    numpy: {
        name: "Numpy",
        className: "bg-[#f6ece1]!",
        iconName: "numpy",
    },
    seaborn: {
        name: "Seaborn",
        iconName: "seaborn",
    },
};

export const getLanguage = (lang: string): Language => {
    if (languages[lang]) return languages[lang];
    const formattedName = lang ? lang.charAt(0).toUpperCase() + lang.slice(1) : "Tech";
    return {
        name: formattedName,
        iconName: "code",
    };
};
