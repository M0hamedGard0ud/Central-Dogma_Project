function transcribeDNAtoRNA(dnaSequence) {
    let rnaSequence = "";
    for (let i = 0; i < dnaSequence.length; i++) {
        let nucleotide = dnaSequence[i];
        if (nucleotide === "T") {
            rnaSequence += "A";
        } else if (nucleotide === "A") {
            rnaSequence += "U";
        } else if (nucleotide === "C") {
            rnaSequence += "G";
        } else if (nucleotide === "G") {
            rnaSequence += "C";
        } else {
            rnaSequence += nucleotide;
        }
    }
    return rnaSequence;
}

function isValidDNASequence(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        let nucleotide = sequence[i];
        if (
            nucleotide !== "A" &&
            nucleotide !== "T" &&
            nucleotide !== "C" &&
            nucleotide !== "G"
        ) {
            return false;
        }
    }
    return true;
}

function transcribeAndTranslate() {
    // Get DNA sequence from input
    let dnaSequence = document
        .getElementById("dnaInput")
        .value.trim()
        .toUpperCase();

    // Input validation
    if (!isValidDNASequence(dnaSequence)) {
        alert(
            "Invalid DNA sequence. Please enter a sequence containing only A, T, C, and G."
        );
        return;
    }

    // Transcribe DNA to RNA
    let rnaSequence = transcribeDNAtoRNA(dnaSequence); // Store the result of the function call

    // Display RNA sequence
    document.getElementById("rnaOutput").value = rnaSequence;

    // Codon to amino acid mapping
    const codonMap = {
        'AUG': 'Methionine', 'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
        'UUA': 'Leucine', 'UUG': 'Leucine', 'UCU': 'Serine', 'UCC': 'Serine',
        'UCA': 'Serine', 'UCG': 'Serine', 'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
        'UGU': 'Cysteine', 'UGC': 'Cysteine', 'UGG': 'Tryptophan', 'CUU': 'Leucine',
        'CUC': 'Leucine', 'CUA': 'Leucine', 'CUG': 'Leucine', 'CCU': 'Proline',
        'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline', 'CAU': 'Histidine',
        'CAC': 'Histidine', 'CAA': 'Glutamine', 'CAG': 'Glutamine', 'CGU': 'Arginine',
        'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine', 'AUU': 'Isoleucine',
        'AUC': 'Isoleucine', 'AUA': 'Isoleucine', 'ACU': 'Threonine', 'ACC': 'Threonine',
        'ACA': 'Threonine', 'ACG': 'Threonine', 'AAU': 'Asparagine', 'AAC': 'Asparagine',
        'AAA': 'Lysine', 'AAG': 'Lysine', 'AGU': 'Serine', 'AGC': 'Serine',
        'AGA': 'Arginine', 'AGG': 'Arginine', 'GUU': 'Valine', 'GUC': 'Valine',
        'GUA': 'Valine', 'GUG': 'Valine', 'GCU': 'Alanine', 'GCC': 'Alanine',
        'GCA': 'Alanine', 'GCG': 'Alanine', 'GAU': 'Aspartate', 'GAC': 'Aspartate',
        'GAA': 'Glutamate', 'GAG': 'Glutamate', 'GGU': 'Glycine', 'GGC': 'Glycine',
        'GGA': 'Glycine', 'GGG': 'Glycine', 'UAA': 'Stop', 'UAG': 'Stop', 'UGA': 'Stop'
    };

    // Translate RNA to protein
    let proteinSequence = "";
    for (let i = 0; i < rnaSequence.length; i += 3) {
        let codon = rnaSequence.slice(i, i + 3);
        if (codonMap[codon]) {
            proteinSequence += codonMap[codon] + " ";
        }
    }

    // Display protein sequence
    document.getElementById("proteinOutput").innerText = proteinSequence.trim();
}

function clearFields() {
    document.getElementById("dnaInput").value = "";
    document.getElementById("rnaOutput").value = "";
    document.getElementById("proteinOutput").innerText = "";
}
