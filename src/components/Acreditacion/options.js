export const freelanceOptions = [
    { value: "Si", label: "Si" },
    { value: "No", label: "No" },
]

export const acreditacionesOptions = [
    { value: "Fotógrafo/a", label: "Fotógrafo/a" },
    { value: "Videógrafo/a", label: "Videógrafo/a" },
    { value: "Redactor/a", label: "Redactor/a" },
]

export const customStyles = {
    control: (base, state) => ({
        ...base,
        background: "#111111",
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "white" : "white",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "white" : "white",
        },
    }),
}