const getColorWithOpacity =
    (colorVariable) =>
    ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${colorVariable}), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
            return `rgba(var(${colorVariable}), var(${opacityVariable}, 1))`;
        }
        return `rgb(var(${colorVariable}))`;
    };

module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: getColorWithOpacity("--color-primary"),
                primarySoft: getColorWithOpacity("--color-primarySoft"),
                primaryBold: getColorWithOpacity("--color-primaryBold"),
                primaryBg: getColorWithOpacity("--color-primaryBold"),
                primaryBgSoft: getColorWithOpacity("--color-primaryBgSoft"),
                primaryBgSofter: getColorWithOpacity("--color-primaryBgSofter"),
                onPrimaryBg: getColorWithOpacity("--color-onPrimaryBg"),
                onPrimaryBgSoft: getColorWithOpacity("--color-onPrimaryBgSoft"),
                onPrimaryBgSofter: getColorWithOpacity(
                    "--color-onPrimaryBgSofter"
                ),

                neutralBg: getColorWithOpacity("--color-neutralBg"),
                neutralBgSoft: getColorWithOpacity("--color-neutralBgSoft"),
                neutralBgSofter: getColorWithOpacity("--color-neutralBgSofter"),
                neutral: getColorWithOpacity("--color-neutral"),
                neutralBold: getColorWithOpacity("--color-neutralBold"),
                neutralSoft: getColorWithOpacity("--color-neutralSoft"),
                onNeutralBg: getColorWithOpacity("--color-onNeutralBg"),
                onNeutralBgSoft: getColorWithOpacity("--color-onNeutralBgSoft"),
                onNeutralBgSofter: getColorWithOpacity(
                    "--color-onNeutralBgSofter"
                ),
            },
        },
    },
    variants: {
        extend: {
            animation: ["group-hover"],
            visibility: ["hover", "focus"],
            height: ["hover", "focus", "group-hover"],
            scale: ["hover", "focus"],
            textColor: ["active", "hover", "focus"],
            padding: ["last"],
            margin: ["last"],
            fontWeight: ["hover", "active", "group-hover"],
            zIndex: ["hover", "group-hover"],
            gradientColorStops: ["hover", "group-hover"],
        },
    },
    plugins: [],
};
