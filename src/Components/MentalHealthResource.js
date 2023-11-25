import React from 'react';

const MentalHealthResource = () => {
  const resources = [
    {
      title: 'National Alliance on Mental Illness (NAMI)',
      description: 'Provides education and support for individuals and families affected by mental illness.',
      link: 'https://www.nami.org/',
    },
    {
      title: 'MentalHealth.gov',
      description: 'Government resource offering information, guidance, and resources related to mental health.',
      link: 'https://www.mentalhealth.gov/',
    },
    {
      title: 'SAMHSA (Substance Abuse and Mental Health Services Administration)',
      description: 'Offers behavioral health treatment services and resources.',
      link: 'https://www.samhsa.gov/',
    },
    {
      title: 'Psychology Today',
      description: 'Articles, information, and a therapist directory to find mental health professionals.',
      link: 'https://www.psychologytoday.com/us',
    },
    {
      title: 'Crisis Text Line',
      description: 'Free, 24/7 crisis support via text message.',
      link: 'https://www.crisistextline.org/',
    },
    {
      title: '7 Cups',
      description: 'Online therapy and emotional support from trained listeners and therapists.',
      link: 'https://www.7cups.com/',
    },
    {
      title: 'Therapy for Black Girls',
      description: 'Focuses on mental health resources for Black women, offering a therapist directory, podcasts, and articles.',
      link: 'https://therapyforblackgirls.com/',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Mental Health Resources</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
            <p className="text-sm text-gray-700 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Go to Resource &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentalHealthResource;
