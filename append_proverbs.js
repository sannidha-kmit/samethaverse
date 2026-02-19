const fs = require('fs');
const path = require('path');

try {
    const filePath = path.resolve('data/telugu_proverbs.json');
    console.log('Reading file:', filePath);
    const proverbsBatch1 = [
        {
            "id": 128,
            "proverb": "అందచందాలు లేని మొగుడు మంచంనిండా ఉన్నాట్టు.",
            "meaning": "The proverb 'అందచందాలు లేని మొగుడు మంచంనిండా ఉన్నాట్టు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అందచందాలు",
                "లేని",
                "మొగుడు",
                "మంచంనిండా",
                "ఉన్నాట్టు"
            ],
            "emotion": "humorous"
        },
        {
            "id": 124,
            "proverb": "అందని (ద్రాక్షపళ్ళు వుల్లన అన్నట్టు.",
            "meaning": "The proverb 'అందని (ద్రాక్షపళ్ళు వుల్లన అన్నట్టు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అందని",
                "(ద్రాక్షపళ్ళు",
                "వుల్లన",
                "అన్నట్టు"
            ],
            "emotion": "social"
        },
        {
            "id": 125,
            "proverb": "అందరి కాళ్ళకు మొక్కినా అత్తగారింటికిపోక తప్పదు.",
            "meaning": "The proverb 'అందరి కాళ్ళకు మొక్కినా అత్తగారింటికిపోక తప్పదు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అందరి",
                "కాళ్ళకు",
                "మొక్కినా",
                "అత్తగారింటికిపోక",
                "తప్పదు"
            ],
            "emotion": "sarcastic"
        },
        {
            "id": 126,
            "proverb": "అందరికీ అట్ట పండగ, మనకు ముట్ట సండగ.",
            "meaning": "The proverb 'అందరికీ అట్ట పండగ, మనకు ముట్ట సండగ.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అందరికీ",
                "అట్ట",
                "పండగ,",
                "మనకు",
                "ముట్ట",
                "సండగ"
            ],
            "emotion": "humorous"
        },
        {
            "id": 127,
            "proverb": "అందరికీ అన్ని రోగాలున్నాయిగాని అడ్డెడు తప్పాలకు ఏ",
            "meaning": "The proverb 'అందరికీ అన్ని రోగాలున్నాయిగాని అడ్డెడు తప్పాలకు ఏ' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అందరికీ",
                "అన్ని",
                "రోగాలున్నాయిగాని",
                "అడ్డెడు",
                "తప్పాలకు",
                "ఏ"
            ],
            "emotion": "warning"
        },
        {
            "id": 128,
            "proverb": "అకటా వికటపురాజు అవివేకపు (ప్రధాని చాదస్తపు పరి",
            "meaning": "The proverb 'అకటా వికటపురాజు అవివేకపు (ప్రధాని చాదస్తపు పరి' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అకటా",
                "వికటపురాజు",
                "అవివేకపు",
                "(ప్రధాని",
                "చాదస్తపు",
                "పరి"
            ],
            "emotion": "motivational"
        },
        {
            "id": 129,
            "proverb": "అక్కన్న అద్దంకి పోనూపొయ్యాడు రానూ వచ్చాడు.",
            "meaning": "The proverb 'అక్కన్న అద్దంకి పోనూపొయ్యాడు రానూ వచ్చాడు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అక్కన్న",
                "అద్దంకి",
                "పోనూపొయ్యాడు",
                "రానూ",
                "వచ్చాడు"
            ],
            "emotion": "philosophical"
        },
        {
            "id": 180,
            "proverb": "అక్కరున్నంతవరకూ, ఆదినారాయణ అక్కర తీరింతర్వాత",
            "meaning": "The proverb 'అక్కరున్నంతవరకూ, ఆదినారాయణ అక్కర తీరింతర్వాత' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అక్కరున్నంతవరకూ,",
                "ఆదినారాయణ",
                "అక్కర",
                "తీరింతర్వాత"
            ],
            "emotion": "social"
        },
        {
            "id": 131,
            "proverb": "అక్కరకు ఒడవని అర్హమెందుకుు అక్కరకు రాని చుట్టమెం",
            "meaning": "The proverb 'అక్కరకు ఒడవని అర్హమెందుకుు అక్కరకు రాని చుట్టమెం' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అక్కరకు",
                "ఒడవని",
                "అర్హమెందుకుు",
                "రాని",
                "చుట్టమెం"
            ],
            "emotion": "discipline"
        },
        {
            "id": 132,
            "proverb": "అక్కర తీరిన తర్వాత అల్లుడు తొత్తుకొడుకై నట్టు.",
            "meaning": "The proverb 'అక్కర తీరిన తర్వాత అల్లుడు తొత్తుకొడుకై నట్టు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అక్కర",
                "తీరిన",
                "తర్వాత",
                "అల్లుడు",
                "తొత్తుకొడుకై",
                "నట్టు"
            ],
            "emotion": "discipline"
        },
        {
            "id": 133,
            "proverb": "అగసాలిని వెలయాలిని _ నమ్మకూడదు.",
            "meaning": "The proverb 'అగసాలిని వెలయాలిని _ నమ్మకూడదు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అగసాలిని",
                "వెలయాలిని",
                "_",
                "నమ్మకూడదు"
            ],
            "emotion": "sarcastic"
        },
        {
            "id": 134,
            "proverb": "అచ్చమ్మ పెళ్ళిలో బుచ్చెమ్మ శోభనం.",
            "meaning": "The proverb 'అచ్చమ్మ పెళ్ళిలో బుచ్చెమ్మ శోభనం.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అచ్చమ్మ",
                "పెళ్ళిలో",
                "బుచ్చెమ్మ",
                "శోభనం"
            ],
            "emotion": "karma"
        },
        {
            "id": 1385,
            "proverb": "అచ్చుబోసిన ఆంబోతు.",
            "meaning": "The proverb 'అచ్చుబోసిన ఆంబోతు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అచ్చుబోసిన",
                "ఆంబోతు"
            ],
            "emotion": "motivational"
        },
        {
            "id": 136,
            "proverb": "అడ్జెడు తవ్వెడు చియ్యమిచ్చి అమ్మా నీ ప్రసాదం అన్నట్లు.",
            "meaning": "The proverb 'అడ్జెడు తవ్వెడు చియ్యమిచ్చి అమ్మా నీ ప్రసాదం అన్నట్లు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అడ్జెడు",
                "తవ్వెడు",
                "చియ్యమిచ్చి",
                "అమ్మా",
                "నీ",
                "ప్రసాదం"
            ],
            "emotion": "social"
        },
        {
            "id": 137,
            "proverb": "అతడికంటు ఘనుడు ఆచంట మల్లన్న.",
            "meaning": "The proverb 'అతడికంటు ఘనుడు ఆచంట మల్లన్న.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అతడికంటు",
                "ఘనుడు",
                "ఆచంట",
                "మల్లన్న"
            ],
            "emotion": "motivational"
        },
        {
            "id": 138,
            "proverb": "అతివృష్టి అనావృష్టి ఏదయినా ఆకలిబాధ తప్పదు.",
            "meaning": "The proverb 'అతివృష్టి అనావృష్టి ఏదయినా ఆకలిబాధ తప్పదు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అతివృష్టి",
                "అనావృష్టి",
                "ఏదయినా",
                "ఆకలిబాధ",
                "తప్పదు"
            ],
            "emotion": "warning"
        },
        {
            "id": 189,
            "proverb": "అతుకుల కాపరం చితుకుల మంటలాంటిది.",
            "meaning": "The proverb 'అతుకుల కాపరం చితుకుల మంటలాంటిది.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అతుకుల",
                "కాపరం",
                "చితుకుల",
                "మంటలాంటిది"
            ],
            "emotion": "motivational"
        },
        {
            "id": 140,
            "proverb": "అతుకుల బొంత గతుకుల బాట,",
            "meaning": "The proverb 'అతుకుల బొంత గతుకుల బాట,' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అతుకుల",
                "బొంత",
                "గతుకుల",
                "బాట,"
            ],
            "emotion": "sarcastic"
        },
        {
            "id": 141,
            "proverb": "అత్తకు అల్జుడాశ బాపడికి పప్పాశ,",
            "meaning": "The proverb 'అత్తకు అల్జుడాశ బాపడికి పప్పాశ,' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అత్తకు",
                "అల్జుడాశ",
                "బాపడికి",
                "పప్పాశ,"
            ],
            "emotion": "sarcastic"
        },
        {
            "id": 142,
            "proverb": "అతను కొటి అటకెక్కిందట. మొగుతి కొతి మొగసాల",
            "meaning": "The proverb 'అతను కొటి అటకెక్కిందట. మొగుతి కొతి మొగసాల' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అతను",
                "కొటి",
                "అటకెక్కిందట",
                "మొగుతి",
                "కొతి",
                "మొగసాల"
            ],
            "emotion": "discipline"
        },
        {
            "id": 143,
            "proverb": "అత్త పెట్టే ఆరళ్ళే కనపడతాయి కాని కోడళ్ళు చేసే కొంటె",
            "meaning": "The proverb 'అత్త పెట్టే ఆరళ్ళే కనపడతాయి కాని కోడళ్ళు చేసే కొంటె' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అత్త",
                "పెట్టే",
                "ఆరళ్ళే",
                "కనపడతాయి",
                "కాని",
                "కోడళ్ళు"
            ],
            "emotion": "wisdom"
        },
        {
            "id": 144,
            "proverb": "అదిగో పులి అంటే ఇదిగో తోక అన్నట్లు.",
            "meaning": "The proverb 'అదిగో పులి అంటే ఇదిగో తోక అన్నట్లు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అదిగో",
                "పులి",
                "అంటే",
                "ఇదిగో",
                "తోక",
                "అన్నట్లు"
            ],
            "emotion": "discipline"
        },
        {
            "id": 145,
            "proverb": "అద్భష్టం చెప్పీరాదు, దురదృష్టం చెప్పీపోదు.",
            "meaning": "The proverb 'అద్భష్టం చెప్పీరాదు, దురదృష్టం చెప్పీపోదు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అద్భష్టం",
                "చెప్పీరాదు,",
                "దురదృష్టం",
                "చెప్పీపోదు"
            ],
            "emotion": "discipline"
        },
        {
            "id": 146,
            "proverb": "అదృష్టవంతుణ్ణి చెడగొట్టవాడు లేడు (భ్రష్ణుణ్ణ్ బాగుపరచే",
            "meaning": "The proverb 'అదృష్టవంతుణ్ణి చెడగొట్టవాడు లేడు (భ్రష్ణుణ్ణ్ బాగుపరచే' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అదృష్టవంతుణ్ణి",
                "చెడగొట్టవాడు",
                "లేడు",
                "(భ్రష్ణుణ్ణ్",
                "బాగుపరచే"
            ],
            "emotion": "karma"
        },
        {
            "id": 147,
            "proverb": "అనగా అనగా రాగం, తినగా తినగా రోగం.",
            "meaning": "The proverb 'అనగా అనగా రాగం, తినగా తినగా రోగం.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అనగా",
                "రాగం,",
                "తినగా",
                "రోగం"
            ],
            "emotion": "social"
        },
        {
            "id": 145,
            "proverb": "అనిత్యాని శరీరాణి అందరిసామ్మూ మనశేరానీ..",
            "meaning": "The proverb 'అనిత్యాని శరీరాణి అందరిసామ్మూ మనశేరానీ..' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అనిత్యాని",
                "శరీరాణి",
                "అందరిసామ్మూ",
                "మనశేరానీ"
            ],
            "emotion": "discipline"
        },
        {
            "id": 149,
            "proverb": "అన్నం ఉడికిందో లేదో అంతా పట్టి చూడక్కరలేదు.",
            "meaning": "The proverb 'అన్నం ఉడికిందో లేదో అంతా పట్టి చూడక్కరలేదు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అన్నం",
                "ఉడికిందో",
                "లేదో",
                "అంతా",
                "పట్టి",
                "చూడక్కరలేదు"
            ],
            "emotion": "social"
        },
        {
            "id": 150,
            "proverb": "అన్నం తిన్నవాడు తన్నులు తిన్నవాడు మరిచిపోడు.",
            "meaning": "The proverb 'అన్నం తిన్నవాడు తన్నులు తిన్నవాడు మరిచిపోడు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అన్నం",
                "తిన్నవాడు",
                "తన్నులు",
                "మరిచిపోడు"
            ],
            "emotion": "social"
        },
        {
            "id": 151,
            "proverb": "అన్నదమ్ముల శత్రుత్వం, అక్కచెల్లెళ్ళ మిత్రత్వం.",
            "meaning": "The proverb 'అన్నదమ్ముల శత్రుత్వం, అక్కచెల్లెళ్ళ మిత్రత్వం.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అన్నదమ్ముల",
                "శత్రుత్వం,",
                "అక్కచెల్లెళ్ళ",
                "మిత్రత్వం"
            ],
            "emotion": "discipline"
        },
        {
            "id": 152,
            "proverb": "అన్న దే (షం (బహ్మద్వేషం పనికిరాదంటారు.",
            "meaning": "The proverb 'అన్న దే (షం (బహ్మద్వేషం పనికిరాదంటారు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అన్న",
                "దే",
                "(షం",
                "(బహ్మద్వేషం",
                "పనికిరాదంటారు"
            ],
            "emotion": "sarcastic"
        },
        {
            "id": 153,
            "proverb": "అన్న వస్త్రాలకు పోతే ఉన్నవ,స్త్రం కాస్తా ఊడిపోయిందట.",
            "meaning": "The proverb 'అన్న వస్త్రాలకు పోతే ఉన్నవ,స్త్రం కాస్తా ఊడిపోయిందట.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అన్న",
                "వస్త్రాలకు",
                "పోతే",
                "ఉన్నవ,స్త్రం",
                "కాస్తా",
                "ఊడిపోయిందట"
            ],
            "emotion": "sarcastic"
        },
        {
            "id": 154,
            "proverb": "అపశబ్ద భయం నాస్తి అప్పలాచార్య సన్నిధౌ అనాచార.",
            "meaning": "The proverb 'అపశబ్ద భయం నాస్తి అప్పలాచార్య సన్నిధౌ అనాచార.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అపశబ్ద",
                "భయం",
                "నాస్తి",
                "అప్పలాచార్య",
                "సన్నిధౌ",
                "అనాచార"
            ],
            "emotion": "discipline"
        },
        {
            "id": 155,
            "proverb": "అబద్దమాడితే అన్నం పుట్టదు నిజమాడితే నీళ్ళు పుట్టవు.",
            "meaning": "The proverb 'అబద్దమాడితే అన్నం పుట్టదు నిజమాడితే నీళ్ళు పుట్టవు.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అబద్దమాడితే",
                "అన్నం",
                "పుట్టదు",
                "నిజమాడితే",
                "నీళ్ళు",
                "పుట్టవు"
            ],
            "emotion": "social"
        },
        {
            "id": 156,
            "proverb": "అబ్బడి నెత్తి దిబ్బడు కొడితే దిబ్బడి నెత్తి సుబ్బడు కొట్టాట్ట.",
            "meaning": "The proverb 'అబ్బడి నెత్తి దిబ్బడు కొడితే దిబ్బడి నెత్తి సుబ్బడు కొట్టాట్ట.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అబ్బడి",
                "నెత్తి",
                "దిబ్బడు",
                "కొడితే",
                "దిబ్బడి"
            ],
            "emotion": "warning"
        },
        {
            "id": 157,
            "proverb": "అబ్బ బావి తవ్విస్తే అబ్బాయి పూడ్చించాడట.",
            "meaning": "The proverb 'అబ్బ బావి తవ్విస్తే అబ్బాయి పూడ్చించాడట.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అబ్బ",
                "బావి",
                "తవ్విస్తే",
                "అబ్బాయి",
                "పూడ్చించాడట"
            ],
            "emotion": "motivational"
        },
        {
            "id": 159,
            "proverb": "అబ్బలేని బిడ్డ, గట్టులేని చేను.",
            "meaning": "The proverb 'అబ్బలేని బిడ్డ, గట్టులేని చేను.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అబ్బలేని",
                "బిడ్డ,",
                "గట్టులేని",
                "చేను"
            ],
            "emotion": "discipline"
        },
        {
            "id": 160,
            "proverb": "అభాగ్యుడికి ఆశలెక్కువ నిర్చాగ్యుడికి నిద్ర ఎక్కువ.",
            "meaning": "The proverb 'అభాగ్యుడికి ఆశలెక్కువ నిర్చాగ్యుడికి నిద్ర ఎక్కువ.' conveys a practical life truth expressed in simple traditional language.",
            "explanation": "This saying reflects everyday wisdom rooted in experience. It highlights human behavior, consequences, or social values in a direct yet meaningful way.",
            "tags": [
                "అభాగ్యుడికి",
                "ఆశలెక్కువ",
                "నిర్చాగ్యుడికి",
                "నిద్ర",
                "ఎక్కువ"
            ],
            "emotion": "motivational"
        }
    ];

    const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const updatedData = [...currentData, ...proverbsBatch1];
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 4), 'utf8');
    console.log('Successfully appended batch 1.');
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
process.exit(0);
