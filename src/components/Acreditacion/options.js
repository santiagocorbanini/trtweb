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
        fontSize: '0.85em',
        background: "#111111",
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#c7c7c7" : "#c7c7c7",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#c7c7c7" : "#c7c7c7",
        },
    }),
}