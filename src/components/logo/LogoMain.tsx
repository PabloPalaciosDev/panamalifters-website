import logo from 'assets/images/logo-panamalifters-notbg.png';

export default function LogoMain({ reverse }: { reverse?: boolean }) {
  return (
    <img
      src={logo}
      alt="Mantis"
      width="200"
      style={{
        filter: reverse ? 'invert(1)' : 'none',
        transition: 'filter 0.3s ease-in-out'
      }}
    />
  );
}
